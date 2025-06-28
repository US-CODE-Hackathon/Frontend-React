import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppContainer = styled.div`
  width: 375px;
  height: 812px;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
`;

export const Header = styled.header`
  width: 100%;
  background-color: #ffffff;
  padding: 20px 0;
  border-bottom: 1px solid #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const AppTitle = styled.h1`
  font-weight: 500;
  font-size: 18px;
  color: #1c1c1c;
  margin: 0;
`;

export const MainContent = styled.main`
  padding: 16px;
  height: calc(100% - 150px);
  overflow-y: auto;
  margin-bottom: 90px;
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

export const StatusCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;

  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

export const StatusCard = styled.div`
  background-color: #f0f5ff;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  position: relative;
`;

export const HeartIcon = styled.div`
  position: absolute;
  top: 14px;
  left: 16px;
  width: 25px;
  height: 22px;
  color: #f575ad;
`;

export const StatusLabel = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #5e6978;
  /* margin-left: 33px; */
  /* margin-bottom: 8px; */
`;

export const StatusValue = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #1c1c1c;
`;

export const StatusDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #666666;
`;

export const ChartContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #f0f2f5;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 28px;
`;

export const ChartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const ChartTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  color: #1c1c1c;
  margin: 0;
`;

export const ChartSubtitle = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #666666;
  margin-left: 8px;
`;

export const LegendContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const LegendDot = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

export const LegendLabel = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #666666;
`;

export const ChartArea = styled.div`
  height: 156px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: end;
  justify-content: space-around;
  padding: 20px 30px;
  position: relative;
`;

export const ChartBar = styled.div<{ height: number; color: string }>`
  width: 20px;
  height: ${props => props.height}%;
  background-color: ${props => props.color};
  border-radius: 4px 4px 0 0;
  position: relative;
  opacity: 0.8;
`;

export const DayLabel = styled.div`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: #9ca3b0;
  text-align: center;
`;

export const NotificationSection = styled.section`
  margin-top: 28px;
`;

export const NotificationTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: #1c1c1c;
  margin: 0 0 9px 0;
`;

export const NotificationCard = styled.div<{ type: 'warning' | 'info' }>`
  background-color: ${props => (props.type === 'warning' ? '#e3f2ff' : '#f0f5fa')};
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 9px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const NotificationIcon = styled.div<{ bgColor: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
  margin-right: 12px;
  flex-shrink: 0;
`;

export const NotificationContent = styled.div`
  flex: 1;
`;

export const NotificationMessage = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: #1c1c1c;
`;

export const NotificationBadgeStatus = styled.span<{ type: 'warning' | 'success' }>`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 500;
  font-size: 12px;
  color: ${props => (props.type === 'warning' ? '#cc4d99' : '#1a9933')};
`;

export const BiographyCard = styled.div`
  background-color: #f0f5fa;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  gap: 16px;
  align-items: center;
  cursor: pointer;
`;

export const BiographyIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #66b2ff;
  flex-shrink: 0;
`;

export const BiographyInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BiographyTitle = styled.h4`
  font-weight: 600;
  font-size: 16px;
  color: #1c1c1c;
  margin: 0;
`;

export const BiographySubtitle = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: #666666;
`;

export const ProgressBackground = styled.div`
  width: 100%;
  height: 6px;
  background-color: #e6e6e6;
  border-radius: 3px;
  overflow: hidden;
`;

export const ProgressBar = styled.div<{ progress: number }>`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: #33cc66;
  border-radius: 3px;
  transition: width 0.3s ease;
`;

export const BiographyStatus = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #1a9933;
`;

export const BottomNavigation = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  background-color: #ffffff;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 144px;
  padding: 20px 32px;
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
