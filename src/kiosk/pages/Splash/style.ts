import styled from "styled-components";

export const SplashContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SplashWrapper = styled.div`
  width: 375px;
  height: 100%;
  background-color: #fff;
`;

export const SplashImgWrappe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 3rem;

  & img {
    width: 200px;
    height: 200px;
  }

  & h1 {
    margin-top: 30px;
    font-weight: 500;

    & > span {
      font-weight: bold;
    }
  }
`