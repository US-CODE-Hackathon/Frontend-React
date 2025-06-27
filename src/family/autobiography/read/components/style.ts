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
  height: 812px;
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  height: 60px;
  background: #ffffff;
  border-bottom: 1px solid #f0f0f2;
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: relative;
  flex-shrink: 0;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #384fff;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.21;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`;

export const Author = styled.div`
  color: #1c1c1c;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.21;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;
`;

export const TitleCard = styled.div`
  width: 327px;
  background: #f0f5fa;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 0 auto;
`;

export const TitleText = styled.span`
  color: #171717;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.21;
  text-align: center;
`;

export const DateText = styled.span`
  color: #666666;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  text-align: center;
`;

export const MarkdownContainer = styled.div`
  width: 327px;
  background: #ffffff;
  border: 1px solid #f0f0f2;
  border-radius: 12px;
  padding: 20px;
  margin: 0 auto;
  min-height: 400px;
  overflow-y: auto;

  /* 마크다운 스타일링 */
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    color: #171717;
    font-family: Inter, sans-serif;
    font-weight: 700;
    margin: 0 0 16px 0;
    line-height: 1.4;
  }

  & h1 {
    font-size: 24px;
  }

  & h2 {
    font-size: 20px;
  }

  & h3 {
    font-size: 18px;
  }

  & p {
    color: #000000;
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.6;
    margin: 0 0 16px 0;
    word-break: keep-all;
    white-space: pre-wrap;
  }

  & blockquote {
    border-left: 4px solid #e3f2ff;
    background: #f9fbff;
    padding: 16px;
    margin: 16px 0;
    border-radius: 8px;

    & p {
      color: #4a5568;
      font-style: italic;
      margin: 0;
    }
  }

  & ul,
  & ol {
    padding-left: 24px;
    margin: 0 0 16px 0;

    & li {
      color: #000000;
      font-family: Inter, sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 8px;
    }
  }

  & strong {
    font-weight: 700;
  }

  & em {
    font-style: italic;
  }

  & code {
    background: #f1f5f9;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
  }

  & pre {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 16px;
    overflow-x: auto;
    margin: 16px 0;

    & code {
      background: none;
      padding: 0;
    }
  }

  & hr {
    border: none;
    height: 1px;
    background: #e2e8f0;
    margin: 24px 0;
  }

  & img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 16px 0;
  }

  & table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;

    & th,
    & td {
      border: 1px solid #e2e8f0;
      padding: 12px;
      text-align: left;
    }

    & th {
      background: #f8fafc;
      font-weight: 600;
    }
  }
`;
