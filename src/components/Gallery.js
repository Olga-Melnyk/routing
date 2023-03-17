import { useParams } from 'react-router-dom';

const Gallery = () => {
  const { dogId } = useParams();
  // useEffect(() => {}, [])
  return <div>Image Gallery: {dogId}</div>;
};

export default Gallery;
