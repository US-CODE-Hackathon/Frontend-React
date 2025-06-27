import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainWrapper = styled.div`
  width: 375px;
  height: 100%;
  background-color: #fff;
`;

export const MainImgWrappe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  & img {
    width: 342px;
    height: 342px;
  }

  & div {
    width: 90%;
     margin-top: 30px;
  }
`