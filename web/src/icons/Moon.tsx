import { createElement } from 'react';

import { StyleProps } from 'types/general';

export function SvgMoon(props: StyleProps) {
  return createElement(
    'svg',
    {
      viewBox: '0 0 32 32',
      width: '1em',
      height: '1em',
      ...props,
    },
    createElement('path', {
      d: 'M5 5v2H3v2h2v2h2V9h2V7H7V5zm15.281 2.938L18.625 8C13.281 8.191 9 12.578 9 17.969c0 5.511 4.488 10 10 10 5.39 0 9.777-4.282 9.969-9.625l.062-1.625-1.468.687A5.94 5.94 0 0125 17.97c-3.324 0-6-2.676-6-6 0-.914.223-1.75.594-2.531zm-2.906 2.375c-.125.554-.375 1.062-.375 1.656 0 4.406 3.594 8 8 8 .605 0 1.121-.246 1.688-.375-.762 3.625-3.829 6.375-7.688 6.375-4.43 0-8-3.57-8-8 0-3.852 2.758-6.887 6.375-7.657z',
    }),
  );
}
export default SvgMoon;
