import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 144px;
  padding: 20px 76px;
  background-color: #ffffff;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 223px;
`;

export const NavItem = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ active }) => (active ? '#5e82ff' : '#666666')};
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
  width: max-content;
`;
