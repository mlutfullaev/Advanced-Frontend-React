import React, {lazy, Suspense, useState} from 'react';

import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/ClassNames";

const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to='/about'>About</Link>
      <Link to='/'>Main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={ <AboutPage /> } />
          <Route path={'/'} element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
