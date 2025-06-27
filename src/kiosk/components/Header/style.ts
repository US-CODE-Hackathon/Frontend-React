import styled from 'styled-components';

export const Header = styled.header`
  width: 374px;
  height: 3rem;
  border-bottom: 1px solid #f0f2f5;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;

  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  @media (max-width: 375px) {
    height: 2.75rem;
  }

  @media (max-height: 600px) {
    height: 2.5rem;
  }
`;
