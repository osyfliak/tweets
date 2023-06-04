import styled from 'styled-components';


export const Block = styled.ul`
  display: flex;
  gap: 50px;
  width: 100%;
  flex-wrap: wrap;
`;

export const Items = styled.li`
  position: relative;
  background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  min-width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
`;

export const Line = styled.img`
  position: absolute;
  top: 51.5%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
