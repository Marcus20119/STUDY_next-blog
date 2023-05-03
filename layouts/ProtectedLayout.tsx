import { Auth } from '@/components/auth';
import { useAuth } from '@/hooks/useAuth';
import { LayoutProps } from '@/pages/_app';

const ProtectedLayout = ({ children }: LayoutProps) => {
  return (
    <Auth>
      <div className="protected-layout">{children}</div>;
    </Auth>
  );
};

export default ProtectedLayout;
