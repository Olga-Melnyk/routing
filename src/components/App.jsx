import DogDetails from 'pages/DogDetails';
import Dogs from 'pages/Dogs';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Gallery } from './Gallery';
import { Layout } from './Layout';
import { SubBreeds } from './SubBreeds';

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
