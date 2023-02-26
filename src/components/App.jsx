import React from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';

import { Loader } from './Loader/Loader.jsx';

import { lazy, Suspense } from 'react';

const LazyHomePage = lazy(() => import('components/pages/HomePage.jsx'));
const LazyMoviesPage = lazy(() => import('./pages/MoviesPage.jsx'));
const LazyFilmPage = lazy(() => import('./pages/FilmPage.jsx'));

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid black',
        paddingLeft: '20px',
        fontSize: 20,
        color: '#09231a',
        flexDirection: 'column',
      }}
    >
      <header>
        <nav>
          <NavLink
            to="/"
            style={{
              margin: '20px',
              textDecoration: 'none',
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            style={{
              margin: '20px',
              textDecoration: 'none',
            }}
          >
            Movies
          </NavLink>
          <NavLink to="/movies/:movieId/*"></NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LazyHomePage />} />
            <Route path="/movies" element={<LazyMoviesPage />} />
            <Route path="/movies/:movieId/*" element={<LazyFilmPage />} />
            <Route
              path="*"
              element={
                <div
                  style={{
                    margin: '20px',
                    color: 'green',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  Start with HomePage ☺<Link to="/">➥ Home</Link>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
