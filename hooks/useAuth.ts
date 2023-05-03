import { authApi } from '@/api-client';
import { StorageKeys } from '@/constants';
import { LoginPayload, UserProfile } from '@/models';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/_internal';

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

function getUserInfo(): UserProfile | null {
  try {
    return JSON.parse(localStorage.getItem(StorageKeys.USER_INFO) || '');
  } catch (error) {
    // console.log('failed to parse user info from local storage', error)
    return null;
  }
}

export function useAuth(options?: Partial<PublicConfiguration | unknown>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR<UserProfile | null | undefined>('/profile', {
    revalidateOnFocus: false,
    dedupingInterval: MILLISECOND_PER_HOUR,
    ...options,
    // Giá trị ban đầu
    fallbackData: getUserInfo(),
    onSuccess(data) {
      // save user info to local storage
      localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(data));
    },
    onError(err) {
      // failed to get profile --> logout
      console.log(err); // send error log to server if any
      logout();
    },
  });

  const firstLoading = profile === undefined && error === undefined;

  async function login(payload: LoginPayload) {
    await authApi.login(payload);
    await mutate(); // Phải có await vì tham số thứ 2 = true => có trigger api
  }

  async function logout() {
    await authApi.logout();
    // Dùng null để phân biệt với trường hợp ban đầu nó undefined
    mutate(null, false);
    localStorage.removeItem(StorageKeys.USER_INFO);
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
