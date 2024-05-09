import { createElement } from 'react';

import { StyleProps } from 'types/general';

export function SvgHanukiahSolid(props: StyleProps) {
  return createElement(
    'svg',
    {
      viewBox: '0 0 32 32',
      width: '1em',
      height: '1em',
      ...props,
    },
    createElement('path', {
      d: 'M16 4s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3zm-3 1s-1 2.063-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.984-1-3-1-3zm6 0s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3zm-9 1S9 8.063 9 9c0 .55.45 1 1 1s1-.45 1-1c0-.984-1-3-1-3zm12 0s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3zM7 7s-1 2.063-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.984-1-3-1-3zm18 0s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3zM4 8s-1 2.063-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.984-1-3-1-3zm24 0s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3zM15 9v9h-.031a.945.945 0 01-.969-.969V10h-2v7.031c0 .34.05.664.156.969h-.187a.95.95 0 01-.969-.969V11H9v6.031c0 .34.082.664.188.969h-.126A1.054 1.054 0 018 16.937V12H6v4.938c0 .375.094.73.219 1.062H6.03A1.02 1.02 0 015 16.969V13H3v3.969A3.05 3.05 0 006.031 20H15v6h-5v2h12v-2h-5v-6h8.969A3.05 3.05 0 0029 16.969V13h-2v3.969A1.02 1.02 0 0125.969 18h-.188c.125-.332.219-.688.219-1.063V12h-2v4.938C24 17.53 23.531 18 22.937 18h-.125c.106-.305.188-.629.188-.969V11h-2v6.031a.95.95 0 01-.969.969h-.187c.105-.305.156-.629.156-.969V10h-2v7.031a.945.945 0 01-.969.969H17V9z',
    }),
  );
}
export default SvgHanukiahSolid;
