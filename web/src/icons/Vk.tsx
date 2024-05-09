import { createElement } from 'react';

import { StyleProps } from 'types/general';

export function SvgVk(props: StyleProps) {
  return createElement(
    'svg',
    {
      viewBox: '0 0 32 32',
      width: '1em',
      height: '1em',
      ...props,
    },
    createElement('path', {
      d: 'M9.082 5A4.098 4.098 0 005 9.082v13.836A4.098 4.098 0 009.082 27h13.836A4.098 4.098 0 0027 22.918V9.082A4.098 4.098 0 0022.918 5zm0 2h13.836C24.078 7 25 7.922 25 9.082v13.836c0 1.16-.922 2.082-2.082 2.082H9.082A2.069 2.069 0 017 22.918V9.082C7 7.922 7.922 7 9.082 7zm6.637 5.23c-.735-.007-1.36 0-1.711.172-.235.114-.414.371-.305.383.137.02.445.086.61.309.21.285.203.93.203.93s.117 1.773-.286 1.996c-.277.152-.656-.157-1.476-1.567-.418-.726-.734-1.527-.734-1.527s-.06-.149-.168-.227c-.133-.097-.317-.129-.317-.129l-1.957.012s-.293.012-.398.137c-.098.117-.008.347-.008.347s1.531 3.582 3.265 5.387C14.027 20.11 15.832 20 15.832 20h.82s.246-.027.371-.16c.118-.125.114-.36.114-.36s-.016-1.097.492-1.261c.504-.157 1.144 1.062 1.828 1.531.52.355.914.277.914.277L22.2 20s.953-.059.5-.813c-.035-.058-.262-.554-1.355-1.57-1.149-1.062-.996-.89.386-2.73.84-1.121 1.176-1.805 1.07-2.102-.1-.277-.718-.203-.718-.203l-2.059.012s-.152-.02-.265.047a.576.576 0 00-.18.222s-.328.867-.762 1.606c-.914 1.554-1.285 1.64-1.433 1.543-.348-.227-.262-.907-.262-1.387 0-1.512.23-2.137-.445-2.3-.223-.055-.387-.09-.957-.095z',
    }),
  );
}
export default SvgVk;