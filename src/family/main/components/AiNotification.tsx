import * as S from './style';

interface NotificationCard {
  id: string;
  message: string;
}

interface AINotificationProps {
  notifications: NotificationCard[];
}

const AINotification = ({ notifications }: AINotificationProps) => (
  <S.NotificationSection>
    <S.NotificationTitle>AI 패턴 감지</S.NotificationTitle>

    {notifications.map(notification => (
      <S.NotificationCard key={notification.id} type="warning">
        <S.NotificationIcon bgColor="#e59933" />
        <S.NotificationContent>
          <S.NotificationMessage>{notification.message}</S.NotificationMessage>
        </S.NotificationContent>
        <S.NotificationBadgeStatus type="warning">주의</S.NotificationBadgeStatus>
      </S.NotificationCard>
    ))}
  </S.NotificationSection>
);

export default AINotification;
