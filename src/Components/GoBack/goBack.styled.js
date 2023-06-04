import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  display: block;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
  text-decoration: none;
  background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  color: #fff;

  width: 100px;
  border-radius: 10.31px;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.02);
  }
`;
