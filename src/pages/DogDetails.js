import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';

const DogDetails = () => {
  const { dogId } = useParams();

  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');

  // useEffect(() => {}, [])

  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <Link to={backLinkLocationRef.current}>Назад до сторінки колекції</Link>
      <ul>
        <li>
          <Link to="subbreeds">Підпороди</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
