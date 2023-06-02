import styled from 'styled-components';
import { FollowButton } from '../../Components/Button/Button';

export const Block = styled.ul`
  display: flex;
  gap: 50px;
`;

export const Items = styled.li`
  background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
`;


export const Button = styled(FollowButton)`
width: 196px;
height: 50px;
border-radius: 10.31px;
border: none
`