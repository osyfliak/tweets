import styled from 'styled-components';

export const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageMessage = styled.img`

  width: 308px;
  height: 168px;
  margin-top: 28px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const Logo = styled.img`
  position: absolute;

  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const Elips = styled.img`
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export const AvatarContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  z-index: 100;
`;

export const Tweets = styled.p`
font-family: 'Montserrat', sans-serif;
font-weight: 500;
font-size: 20px;
text-transform: uppercase;
color: #EBD8FF;
margin-top: 26px;
margin-bottom: 16px;
`;

export const Followers = styled.p`
font-family: 'Montserrat', sans-serif;
font-weight: 500;
font-size: 20px;
text-transform: uppercase;
color: #EBD8FF;
margin-bottom: 26px;
`;