import { CONSTANTS } from 'constants/constants';
import { RootState } from 'store/store';
import { RouteType } from './types';
import { useSelector } from 'react-redux';
import { publicRoute } from 'router';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from 'page/notFound';
import GlobalStyle from 'components/layout/globalStyle';
import DefaultLayout from 'components/layout/defaultLayout';

const App = () => {
  const { isLight } = useSelector((state: RootState) => state.actionHeader);

  return (
    <ThemeProvider
      theme={{ theme: isLight ? CONSTANTS.LIGHT : CONSTANTS.DARK }}
    >
      <GlobalStyle>
        <BrowserRouter>
          <Routes>
            {/* LIST ROUTE */}
            {publicRoute?.map((route: RouteType, i: number) => {
              const Component = route.component;
              return (
                <Route
                  key={i}
                  path={route.patch}
                  element={
                    <DefaultLayout noneBanner={route.noneBanner}>
                      <Component />
                    </DefaultLayout>
                  }
                />
              );
            })}
            {/* NOT FOUND ROUTE */}
            <Route
              path="*"
              element={
                <DefaultLayout noneBanner>
                  <NotFound />
                </DefaultLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </GlobalStyle>
    </ThemeProvider>
  );
};

export default App;
