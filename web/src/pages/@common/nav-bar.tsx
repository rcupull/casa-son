import { IconButton } from 'components/icon-button';
import { IconUpdate } from 'components/icon-update';
import { Menu } from 'components/menu';
import { NavBar as NavBarBase } from 'components/nav-bar';
import { UserAvatar } from 'components/user-avatar';

import { useAuthSignOut } from 'features/api/auth/useAuthSignOut';
import { useAuth } from 'features/api-slices/useAuth';
import { useCallFromAfar } from 'hooks/useCallFromAfar';

import SvgKeySolid from 'icons/KeySolid';
import SvgSignInAltSolid from 'icons/SignInAltSolid';
import SvgSignOutAltSolid from 'icons/SignOutAltSolid';
import SvgUser from 'icons/User';
import SvgUsersSolid from 'icons/UsersSolid';
import { useAuthChangePasswordModal } from 'pages/@modals/useAuthChangePasswordModal';
import { useAuthSignInModal } from 'pages/@modals/useAuthSignInModal';
import { StyleProps } from 'types/general';

export interface NavbarProps extends StyleProps {}
export const Navbar = ({ className }: NavbarProps) => {
  const { isAuthenticated, authData, onRefreshAuthUser } = useAuth();
  const { authSignOut } = useAuthSignOut();
  const { user } = authData || {};
  const authChangePasswordModal = useAuthChangePasswordModal();

  const authSignInModal = useAuthSignInModal();
  const callAfarResourcesRefreshUser = 'callAfarResourcesRefreshUser';
  useCallFromAfar(callAfarResourcesRefreshUser, onRefreshAuthUser);

  return (
    <NavBarBase
      className={className}
      preContent={
        <>
          BusinessLogo
          <div className="w-px h-3/6 bg-gray-400 hidden sm:block flex-shrink-0" />
        </>
      }
      items={[{ name: 'Inicio', href: '/' }]}
      postContent={
        <>
          {/* <Menu
            buttonElement={
              isAuthenticated ? (
                <UserAvatar />
              ) : (
                <IconButton svg={<SvgUser className="!size-7" />} />
              )
            }
            topElement={
              <>
                {user ? (
                  <div className="px-2 py-3 flex flex-col items-center border">
                    <span className="text-sm border px-2 py-1 rounded-2xl">{user.name}</span>
                    <span className="text-xs mt-2">{user.email}</span>
                  </div>
                ) : (
                  <></>
                )}
              </>
            }
            items={[
              user && {
                label: 'Editar perfil',
                onClick: () => {},
                svg: IconUpdate,
              },
              !isAuthenticated && {
                label: 'Iniciar sesión',
                onClick: () => authSignInModal.open(),
                svg: SvgSignInAltSolid,
              },
              isAuthenticated && {
                label: 'Cerrar sesión',
                onClick: () => {
                  // if (isAuthenticatedPage) {
                  //   pushRoute('/');
                  // }
                  setTimeout(() => authSignOut.fetch(), 500);
                },
                svg: SvgSignOutAltSolid,
              },
              isAuthenticated && {
                label: 'Cambiar contraseña',
                onClick: () => {
                  authChangePasswordModal.open();
                },
                svg: SvgKeySolid,
              },
              { label: 'Saber más sobre nosotros', href: '/about-us', svg: SvgUsersSolid },
            ]}
            className="flex-shrink-0"
          /> */}
        </>
      }
    />
  );
};
