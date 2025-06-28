import styled from 'styled-components';

export const ForwardingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ForwardingWrapper = styled.div`
  width: 375px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const ForwardingImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  & h1 {
    position: relative;
    font-size: 24px;
    margin-top: 30px;
    font-weight: 500;
    margin-bottom: 3rem;
  }
`;

export const ForwardingPlane = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 100%;
  border: 1px solid #f0f5ff;
  background-color: #f0f5ff;
  color: #384fff;
  font-size: 35px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const ForwardingSuccess = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 100%;
  border: 1px solid #384fff;
  background-color: #384fff;
  color: #f0f5ff;
  font-size: 35px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
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
    border: 2px solid #d4d4d4;
    color: #000;
    transition: background-color 0.15s ease-in;

    &:hover {
      background-color: rgb(238, 235, 235);
    }
  }
`;

export const ProgressBarWrapper = styled.div`
  margin-top: 3rem;
`;
