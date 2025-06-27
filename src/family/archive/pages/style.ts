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
  min-height: 100vh;
  background-color: #ffffff;
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  padding: 0;
  margin: 0;
`;

export const Header = styled.header`
  width: 100%;
  height: 3rem;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 18px;
  color: #1c1c1c;
`;

export const BackButton = styled.button`
  position: absolute;
  left: 16px;
  background: none;
  border: none;
  font-size: 16px;
  color: #384fff;
  cursor: pointer;
  font-weight: 500;
`;

export const MainContent = styled.main`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #1c1c1c;
  margin: 0;
`;
