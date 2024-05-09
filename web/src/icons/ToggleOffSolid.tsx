import { createElement } from 'react';

import { StyleProps } from 'types/general';

export function SvgToggleOffSolid(props: StyleProps) {
  return createElement(
    'svg',
    {
      viewBox: '0 0 32 32',
      width: '1em',
      height: '1em',
      ...props,
    },
    createElement('path', {
      d: 'M9 7c-.621 0-1.227.066-1.813.188a9.238 9.238 0 00-.875.218A9.073 9.073 0 00.72 12.5c-.114.27-.227.531-.313.813A8.848 8.848 0 000 16c0 .93.145 1.813.406 2.656.004.008-.004.024 0 .032A9.073 9.073 0 005.5 24.28c.27.114.531.227.813.313.851.27 1.746.406 2.687.406h14c4.957 0 9-4.043 9-9s-4.043-9-9-9zm0 2c3.879 0 7 3.121 7 7s-3.121 7-7 7-7-3.121-7-7c0-.242.008-.484.031-.719A6.985 6.985 0 019 9zm5.625 0H23c3.879 0 7 3.121 7 7s-3.121 7-7 7h-8.375C16.675 21.348 18 18.828 18 16c0-2.828-1.324-5.348-3.375-7z',
    }),
  );
}
export default SvgToggleOffSolid;
