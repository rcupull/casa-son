import { Popover } from '@headlessui/react';

import { Footer } from './footer';
import { SideBar } from './side-bar';

import { Navbar } from 'pages/@common/nav-bar';
import { ChildrenProp } from 'types/general';
import { cn } from 'utils/general';

export interface LayoutMainProps extends ChildrenProp {}

export const LayoutMain = ({ children }: LayoutMainProps): JSX.Element => {
  


  const smSideBar = (
    <div className={cn('min-w-64 hidden h-screen sm:block')}>
      <SideBar />
    </div>
  );

  const xsSideBar = (
    <Popover className={cn('relative sm:hidden')}>
      {({ close }) => {
        return (
          <>
            <Popover.Button as="div" className="absolute -top-12 z-10">
              <div className="flex w-14 cursor-pointer">Logo</div>
            </Popover.Button>

            <Popover.Panel className="absolute z-10">
              <div className="min-w-64 h-screen" onClick={() => close()}>
                <SideBar />
              </div>
            </Popover.Panel>
          </>
        );
      }}
    </Popover>
  );

  return (
    <div className="flex flex-col h-screen relative">
      <div className="flex flex-row-reverse mt-[64px]">
        <div
          className={cn(
            'w-full overflow-auto max-h-[calc(100vh-64px)] min-h-[calc(100vh-64px)] flex flex-col sm:w-[calc(100%-16rem)]',
          )}
        >
          <div className="p-3">{children}</div>

          <Footer className="mt-auto flex-shrink-0" />
        </div>

        {xsSideBar}
        {smSideBar}
      </div>

      <Navbar className="flex-shrink-0 fixed top-0" />
    </div>
  );
};
