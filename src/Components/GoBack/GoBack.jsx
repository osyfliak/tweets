import { useLocation } from 'react-router-dom';
import { Button } from './goBack.styled';

export const GoBack = () => {
  const location = useLocation();
  return <Button to={location.state?.from ?? '/'}>Go back</Button>;
};
