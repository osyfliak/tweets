import styled, { css } from 'styled-components';

export const FollowButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #373737;

  width: 196px;
  height: 50px;
  border-radius: 10.31px;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.02);
  }

  ${props =>
    props.subscription &&
    css`
      background-color: #5cd3a8;
    `}
`;
