import { SideBar as SideBarBase } from 'components/side-bar';

import { useAuth } from 'features/api-slices/useAuth';
import { SideBarUserHeader } from './SideBarUserHeader';

import SvgCogSolid from 'icons/CogSolid';
import { StyleProps } from 'types/general';

export interface SideBarProps extends StyleProps {}

export const SideBar = ({ className }: SideBarProps) => {
  const { isAdmin, isAuthenticated } = useAuth();

  return (
    <SideBarBase
      className={className}
      items={[
        isAuthenticated && {
          content: <SideBarUserHeader />,
        },
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        {
          divider: true,
        },
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        {
          divider: true,
          className: 'sm:hidden',
        },
        isAuthenticated &&
          isAdmin && {
            // ADMIN
            label: 'Admin',
            href: '/admin',
            svg: SvgCogSolid,
          },
      ]}
    />
  );
};
