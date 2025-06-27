import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

export const PageContainer = styled.div`
  width: 375px;
  height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
`;

export const Header = styled.header`
  height: 3rem;
  padding-left: 16px;
  background: #ffffff;
  border-bottom: 1px solid #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const MainContent = styled.main`
  height: calc(812px - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 40px 24px;
`;

export const MainContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const LottieContainer = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainCongrates = styled.div`
  width: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  border-radius: 16px;
`;

export const FirstCongrates = styled.span`
  color: #171717;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.21;
  text-align: center;
`;

export const SecondCongrates = styled.span`
  color: #171717;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.21;
  text-align: center;
`;

export const CongratesBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background: #e3f2ff;
`;

export const CongratesText = styled.span`
  color: #666666;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.21;
  text-align: center;
  max-width: 231px;
`;

export const ViewButton = styled.button`
  width: 327px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  background: #00aa17;
  cursor: pointer;

  color: #ffffff;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.21;

  &:hover {
    background: #009615;
  }

  &:active {
    background: #008013;
  }
`;

export const LaterButton = styled.button`
  width: 327px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d4d4d4;
  border-radius: 12px;
  background: #ffffff;
  cursor: pointer;

  color: #666666;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.21;

  &:hover {
    background: #f9f9f9;
  }

  &:active {
    background: #f0f0f0;
  }
`;
