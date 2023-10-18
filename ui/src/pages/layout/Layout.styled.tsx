import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 60px;
  background-color: #181A1C;
`

export const LayoutWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  height: 100%;
  width: 500px;
  background-color: #F0F2F4;
`

export const ContentWrapper = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const TextWrapper = styled.div`
  justify-content: space-between;

`;