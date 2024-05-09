import { useModal } from 'features/modal/useModal';

import { ModalId } from './types';

import { dynamic, LoadableReturn } from 'utils/makeLazy';

const componentRecord: Record<ModalId, LoadableReturn> = {
  Emergent: dynamic(() =>
    import('./components/emergent').then((m) => ({
      default: m.Emergent,
    })),
  ),
};

export const ModalContainer = (): JSX.Element | null => {
  const { allModalData } = useModal();

  return (
    <>
      {allModalData?.map(({ id, props }, index) => {
        const Component = componentRecord[id];
        return !!Component && <Component key={index} {...props} />;
      })}
    </>
  );
};
