import { createElement } from 'react';

import { StyleProps } from 'types/general';

export function SvgBehance(props: StyleProps) {
  return createElement(
    'svg',
    {
      viewBox: '0 0 32 32',
      width: '1em',
      height: '1em',
      ...props,
    },
    createElement('path', {
      d: 'M1 6.75v18.5h8.938c.828 0 6.53-.168 6.53-5.375 0-3.254-2.238-4.36-3.374-4.688.836-.394 2.5-1.332 2.5-3.843 0-1.399-.2-4.594-5.906-4.594zm20.375 1.719v1.687h6.906V8.47zM5.062 9.906h3.813c.36 0 2.781-.191 2.781 2.125 0 1.98-1.75 2.188-2.469 2.188H5.064zM25 11.687c-5.223 0-6.313 4.536-6.313 6.5 0 5.833 4.782 6.5 6.313 6.5 4.129 0 5.3-2.671 5.781-4.156h-3c-.117.383-.992 1.625-2.656 1.625-2.79 0-3.031-2.18-3.031-3.156h8.875c.18-3.375-1.297-7.313-5.969-7.313zm-.094 2.532c.832 0 1.504.242 1.907.687.402.45.699 1.106.78 1.969h-5.5c.016-.238.071-.512.157-.813.086-.308.219-.601.438-.875.218-.269.523-.503.875-.687.359-.188.804-.281 1.343-.281zM5.063 17h4.406c.875 0 2.937.137 2.937 2.656 0 2.442-2.597 2.438-3 2.438H5.062z',
    }),
  );
}
export default SvgBehance;