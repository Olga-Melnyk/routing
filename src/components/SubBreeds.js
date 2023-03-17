import { useParams } from 'react-router-dom';

const SubBreeds = () => {
  const { dogId } = useParams();
  // useEffect(() => {}, [])
  return <div>Subbreeds: {dogId}</div>;
};

export default SubBreeds;
