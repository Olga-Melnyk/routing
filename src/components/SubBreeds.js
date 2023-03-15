import { useParams } from 'react-router-dom';

export const SubBreeds = () => {
  const { dogId } = useParams();
  // useEffect(() => {}, [])
  return <div>Subbreeds: {dogId}</div>;
};
