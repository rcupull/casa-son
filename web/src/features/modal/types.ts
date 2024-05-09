import type { EmergentProps } from './components/emergent';

export type ModalId = 'Emergent';

export type ModalWindowProps<Id extends ModalId> = Id extends 'Emergent'
  ? EmergentProps
  : undefined;
export interface ModalWindowOptions {
  timeout?: number;
  emergent?: boolean;
}
