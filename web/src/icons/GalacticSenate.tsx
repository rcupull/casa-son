import { createElement } from 'react';

import { StyleProps } from 'types/general';

export function SvgGalacticSenate(props: StyleProps) {
  return createElement(
    'svg',
    {
      viewBox: '0 0 32 32',
      width: '1em',
      height: '1em',
      ...props,
    },
    createElement('path', {
      d: 'M15.64 3v1.53c-.796 1.21-1.4 6.373-1.437 12.638.69-.917 1.123-1.955 1.123-2.83v-.992a3.278 3.278 0 01.13-.918c.037-.126.081-.24.153-.342a.483.483 0 01.393-.223c.19 0 .319.12.39.223.073.103.117.216.155.342.084.3.13.606.129.918v.992c0 .875.434 1.913 1.123 2.83-.037-6.265-.643-11.429-1.44-12.639V3h-.718zm-1.546 8.674a8.668 8.668 0 00-1.612.531c.522.946.573 1.918.1 2.19-.469.27-1.282-.25-1.84-1.165a8.97 8.97 0 00-1.793 1.827c.864.565 1.342 1.344 1.074 1.798-.266.452-1.175.419-2.082-.056a9.12 9.12 0 00-.683 2.488 3.699 3.699 0 011.537.356c1.045-.018 1.924-.116 2.377-.248a5.038 5.038 0 012.717-3.493 99.64 99.64 0 01.205-4.228zm3.81 0c.093 1.315.162 2.73.205 4.228a5.034 5.034 0 012.72 3.493c.452.133 1.331.23 2.374.248.441-.215.97-.345 1.537-.356a9.075 9.075 0 00-.683-2.488c-.906.475-1.815.508-2.082.056-.268-.454.21-1.234 1.074-1.798a8.997 8.997 0 00-1.793-1.827c-.558.915-1.371 1.436-1.84 1.165-.472-.273-.422-1.244.1-2.19a8.69 8.69 0 00-1.612-.531zm-1.902.504c-.189 0-.344.517-.357 1.17h-.004v.99c0 2.43-2.877 5.576-5.487 5.576-3.04 0-7.171-.082-9.152 1.695v.203c.548.99 1.194 1.92 1.924 2.778.735-1.238 3.027-2.404 6.338-2.428 2.68.06 4.638 1.194 5.326 2.399v.002c.45.126.931.191 1.412.189.481.001.96-.064 1.41-.19v-.001c.69-1.205 2.646-2.34 5.326-2.399 3.312.023 5.603 1.19 6.338 2.428a17.043 17.043 0 001.926-2.777v-.204H31c-1.981-1.777-6.111-1.695-9.152-1.695-2.61 0-5.487-3.146-5.487-5.576v-.99h-.004c-.014-.653-.166-1.17-.355-1.17zM16 17.844a2.383 2.383 0 012.383 2.383A2.386 2.386 0 0116 22.613a2.386 2.386 0 01-2.383-2.386A2.383 2.383 0 0116 17.844zm0 .449a1.934 1.934 0 10.001 3.868A1.934 1.934 0 0016 18.293zm0 .361a1.575 1.575 0 11-.001 3.15 1.575 1.575 0 01.001-3.15zm-6.736 3.912c-.598.004-1.27.02-1.791.096.025.26.09 1.094.418 1.748a5.992 5.992 0 011.62-.228c2.424.055 4.195 2.015 4.593 4.369l.005.275a10.416 10.416 0 003.782 0l.005-.275c.398-2.354 2.171-4.314 4.594-4.37.543 0 1.086.08 1.621.23.33-.654.391-1.489.416-1.749-.522-.076-1.19-.092-1.789-.096-1.1.025-2.064.246-2.851.569-.736.94-1.711 1.76-2.91 1.94l-.016.003-.01.002a4.709 4.709 0 01-1.9 0l-.008-.002c-.006 0-.012-.003-.018-.004-1.198-.178-2.173-.998-2.91-1.94a8.03 8.03 0 00-2.851-.568z',
    }),
  );
}
export default SvgGalacticSenate;
