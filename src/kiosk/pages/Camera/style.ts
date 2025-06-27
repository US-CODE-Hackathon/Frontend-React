import styled from "styled-components";

export const CameraContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CameraWrapper = styled.div`
  width: 375px;
  height: 100%;
  background-color: #fff;
`;

export const CameraImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5rem;

  video, img {
    width: 100%;
    border-radius: 12px;
    margin-top: 1rem;
  }

  & img {
    width: 100%;
    height: 250px;
  }

  & div {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & h1 {
    font-size: 24px;
    margin-top: 30px; 
    font-weight: 500;

    & > span {
      font-weight: bold;
    }
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 50px;

  button {
    padding: 15px 20px;
    font-size: 20px;
    font-weight: bold;
  }

  .replay {
    width: 100%;
    border-radius: 8px;
    background-color: #fff;
    border: 2px solid #D4D4D4;
    color: #000;
    transition: background-color 0.15s ease-in ;

    &:hover {
      background-color:rgb(238, 235, 235);
      }
  }
`