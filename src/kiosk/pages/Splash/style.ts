import styled from 'styled-components';

export const SplashContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SplashWrapper = styled.div`
  width: 375px;
  height: 100%;
  background-color: #fff;
`;

export const SplashImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5rem;

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
`;

export const VoiceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  flex-direction: column;

  & > button {
    width: 96px;
    height: 96px;
    border-radius: 100%;
    border: 1px solid #f0f5ff;
    background-color: #f0f5ff;
    color: #384fff;
    font-size: 35px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const GuideText = styled.p`
  margin-top: 8px;
  font-size: 1rem;
  color: #333;
  text-align: center;
  background-color: #fff8dc;
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid #f0e68c;
  font-weight: 500;
  line-height: 1.4;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  width: 100%;
  max-width: 307px;

  h2 {
    margin-bottom: 15px;
    font-size: 24px;
  }

  h3 {
    color: #666666;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    background-color: #e0f0fa;
    color: #99804d;
    padding: 10px;
    border-radius: 8px;

    & > span {
      font-weight: bold;
    }
  }

  .transcript {
    width: 279px;
    margin-bottom: 20px;
    word-wrap: break-word;
    background-color: #f5f7fa;
    border-radius: 12px;
    font-size: 24px;
    padding: 20px;
    display: flex;
    align-items: center;
  }

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

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const RecordWrapper = styled.div`
  font-size: 16px;
  color: #525252;
  margin-top: 20px;

  & > span {
    font-size: 24px;
    columns: #171717;
  }
`;
