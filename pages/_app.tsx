import EmptyLayout from '@/layouts/EmptyLayout';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { SWRConfig } from 'swr';

import { axiosClient } from '@/api-client';
import '@/styles/globals.css';
import createEmotionCache from '@/utils/createEmotionCache';
import theme from '@/utils/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export interface LayoutProps {
  children: React.ReactNode;
}

export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement;
};

export type MyAppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <SWRConfig
          value={{
            fetcher: url => axiosClient.get(url),
            shouldRetryOnError: false, // Tắt chức năng khi bị fail thì gửi lại request vì ít có khả năng thành công
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}
