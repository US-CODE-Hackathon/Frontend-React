import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 375px;
  aspect-ratio: 375 / 812;
  background-color: #ffffff;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  padding: 16px;
  padding-top: calc(3rem + 10px);
  margin-bottom: 100px;
  overflow-y: auto;
  flex: 1;
  min-height: 0;

  &::-webkit-scrollbar {
    margin-top: 8px;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: #1c1c1c;
  margin: 0 0 16px 0;
`;

export const TabContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 4px;
  margin-bottom: 16px;
  display: flex;
`;

export const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  background-color: ${props => (props.active ? '#ffffff' : 'transparent')};
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 14px;
  color: ${props => (props.active ? '#1c1c1c' : '#666666')};
  cursor: pointer;
  transition: all 0.2s ease;
`;

export const BottomNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  background-color: #ffffff;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);
  gap: 144px;
  padding: 20px 76px;
`;

export const NavItem = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => (props.active ? '#5e82ff' : '#666666')};
  transition: color 0.2s ease;
`;

export const NavIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLabel = styled.span`
  font-weight: 500;
  font-size: 16px;
`;
