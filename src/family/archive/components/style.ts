import * as T from './type';

import styled from 'styled-components';

export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 100%;
`;

export const NotificationCard = styled.div<{ bgColor: string }>`
  background-color: ${props => props.bgColor};
  border-radius: 16px;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0;
  position: relative;
  width: 100%;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const PhotoThumbnail = styled.div<{ color: string }>`
  width: 56px;
  height: 56px;
  background-color: ${props => props.color};
  border-radius: 12px;
  margin: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    font-size: 24px;
    opacity: 0.7;
  }
`;

export const VoiceOverlay = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 20px;
  height: 20px;
  background-color: #33cce5;
  border-radius: 50%;
  border: 2px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    font-size: 10px;
  }
`;

export const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 13px;
  margin-left: 12px;
  margin-right: 70px;
`;

export const MessageText = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 1.21;
  color: #1c1c1c;
`;

export const TimeText = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.21;
  color: #666666;
`;

export const MoodBadge = styled.div<{ moodType: T.MoodType }>`
  position: absolute;
  right: 8px;
  bottom: 6px;
  width: 50px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props => {
    switch (props.moodType) {
      case '긍정':
        return '#33cc66';
      case '보통':
        return '#ffac5f';
      case '부정':
        return '#ff5c5c';
      default:
        return '#666666';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BadgeText = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.21;
  color: #ffffff;
`;

export const SectionTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #1c1c1c;
  margin: 0 0 16px 0;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #666666;
  font-size: 14px;
`;
