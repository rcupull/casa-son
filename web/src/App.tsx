import { Route, Routes } from 'react-router-dom';

import { LayoutMain } from 'pages/@common/layout-main';
import { withPageProviders } from 'pages/@common/with-page-providers';
import { dynamic } from 'utils/makeLazy';

const NotFound = dynamic(() => import('pages/not-found').then((m) => ({ default: m.NotFound })));
const Home = dynamic(() => import('pages/home').then((m) => ({ default: m.Home })));

export const App = (): JSX.Element => {


  return (
    <Routes>
      <Route path="/" element={withPageProviders(<Home />, LayoutMain)} />

      <Route path="/not-found" element={withPageProviders(<NotFound />, LayoutMain)} />
    </Routes>
  );
};
