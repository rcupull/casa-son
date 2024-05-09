import { createElement } from 'react';

import { StyleProps } from 'types/general';

export function SvgFlushedSolid(props: StyleProps) {
  return createElement(
    'svg',
    {
      viewBox: '0 0 32 32',
      width: '1em',
      height: '1em',
      ...props,
    },
    createElement('path', {
      d: 'M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5zm-4.5 3A5.506 5.506 0 006 13.5c0 3.033 2.467 5.5 5.5 5.5 1.86 0 3.504-.932 4.5-2.35A5.493 5.493 0 0020.5 19c3.033 0 5.5-2.467 5.5-5.5S23.533 8 20.5 8c-1.86 0-3.504.932-4.5 2.35A5.493 5.493 0 0011.5 8zm0 2c1.93 0 3.5 1.57 3.5 3.5S13.43 17 11.5 17 8 15.43 8 13.5 9.57 10 11.5 10zm9 0c1.93 0 3.5 1.57 3.5 3.5S22.43 17 20.5 17 17 15.43 17 13.5s1.57-3.5 3.5-3.5zm-9 2a1.5 1.5 0 000 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 000 3 1.5 1.5 0 000-3zM12 21v2h8v-2h-8z',
    }),
  );
}
export default SvgFlushedSolid;
