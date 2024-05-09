import { createElement } from 'react';

import { StyleProps } from 'types/general';

export function SvgFanSolid(props: StyleProps) {
  return createElement(
    'svg',
    {
      viewBox: '0 0 32 32',
      width: '1em',
      height: '1em',
      ...props,
    },
    createElement('path', {
      d: 'M16 4C10.488 4 6 8.488 6 14s4.488 10 10 10 10-4.488 10-10S21.512 4 16 4zm0 2a7.977 7.977 0 017.969 7.438 4.822 4.822 0 00-2-.813 7.069 7.069 0 00-1.313-.094 7.299 7.299 0 00-1.906.281 3.017 3.017 0 00-3.375-1.75c-.008-.007-.023.008-.031 0-.649-.542-1.34-1.382-1.656-2.218-.211-.559-.258-1.074-.157-1.5.098-.418.313-.813.875-1.188A8.228 8.228 0 0116 6zm-4.5 1.406a4.77 4.77 0 00.313 2.125 7.392 7.392 0 001.78 2.688 3.002 3.002 0 00.219 3.844c-.16.796-.539 1.765-1.093 2.437-.383.465-.824.777-1.25.906-.426.13-.867.137-1.5-.187C8.754 17.816 8 16.008 8 14c0-2.754 1.395-5.156 3.5-6.594zM16 13c.563 0 1 .438 1 1 0 .563-.438 1-1 1-.563 0-1-.438-1-1 0-.563.438-1 1-1zm4.688 1.563c.32-.012.644.011.937.062.586.102 1.078.316 1.406.625.309.293.512.668.563 1.313A8.006 8.006 0 0116 22c-1.27 0-2.469-.29-3.531-.813.715-.312 1.308-.832 1.781-1.406a7.528 7.528 0 001.438-2.812c.105.011.203.031.312.031 1.313 0 2.41-.879 2.813-2.063.519-.199 1.199-.351 1.875-.374zM15 25v1H9v2h14v-2h-6v-1z',
    }),
  );
}
export default SvgFanSolid;
