import { useParams } from 'react-router-dom';

export const Gallery = () => {
  const { dogId } = useParams();
  // useEffect(() => {}, [])
  return <div>Image Gallery: {dogId}</div>;
};
