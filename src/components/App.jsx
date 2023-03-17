// import DogDetails from 'pages/DogDetails';
// import Dogs from 'pages/Dogs';
// import Home from 'pages/Home';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Gallery from './Gallery';
import { Layout } from './Layout';
// import SubBreeds from './SubBreeds';
const Home = lazy(() => import('../pages/Home'));
const Dogs = lazy(() => import('../pages/Dogs'));
const DogDetails = lazy(() => import('../pages/DogDetails'));
const Gallery = lazy(() => import('../components/Gallery'));
const SubBreeds = lazy(() => import('../components/SubBreeds'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogDetails />}>
          <Route path="subbreeds" element={<SubBreeds />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
