import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

// 메인 컨테이너
export const Container = styled.div`
  width: 375px;
  min-height: 100vh;
  background: #ffffff;
  overflow: hidden;
`;

// 헤더
export const Header = styled.div`
  height: 3rem;
  padding-left: 16px;
  background: #ffffff;
  border-bottom: 1px solid #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
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

export const DateText = styled.div`
  color: #1c1c1c;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.21;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

// 메인 콘텐츠
export const MainContent = styled.div`
  height: 680px;
  background: #ffffff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// 알림 정보 섹션
export const NotificationInfo = styled.div`
  max-width: 343px;
  background: #f0f5ff;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const NotificationQuote = styled.div`
  color: #1c1c1c;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.21;
`;

export const NotificationDetails = styled.div`
  color: #808080;
  font-size: 12px;
  line-height: 1.21;
`;

// 사진 콘텐츠 섹션
export const PhotoContent = styled.div`
  background: #ffffff;
  border: 1px solid #f0f2f5;
  border-radius: 16px;
  padding: 16px;
  position: relative;
`;

export const PhotoTitle = styled.div`
  color: #1c1c1c;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.21;
  margin-bottom: 13px;
`;

export const PhotoImage = styled.img`
  width: 311px;
  height: 270px;
  background: #cce5b2;
  border-radius: 12px;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const PhotoHint = styled.div`
  color: #666666;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.21;
`;

export const MoodBadge = styled.div<{ color: string }>`
  position: absolute;
  top: 55px;
  right: 20px;
  background: ${props => props.color};
  border-radius: 16px;
  padding: 8px 23px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoodBadgeText = styled.div`
  color: #ffffff;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.21;
`;

// AI 요약 섹션
export const AISummary = styled.div`
  background: #ffffff;
  border: 1px solid #f0f2f5;
  border-radius: 16px;
  padding: 16px;
`;

export const AISummaryTitle = styled.div`
  color: #1c1c1c;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.21;
  margin-bottom: 12px;
`;

export const AISummaryText = styled.div`
  color: #333333;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  word-break: keep-all;
`;
