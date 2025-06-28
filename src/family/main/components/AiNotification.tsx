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
          <S.NotificationMessage>
            최근 7일간의 감정 리포트를 분석한 결과, 긍정 감정의 비율은 28%로 나타났습니다.
            전반적으로 무사히 하루를 마무리했다는 안도감과 따뜻한 차를 마시며 여유를 느끼는 긍정적인
            순간도 있었지만, 허전함과 고요함 속에서 외로움을 느끼는 감정이 반복적으로 나타났습니다.
            필요하다면 전문가의 상담을 통해 보다 심층적인 어려움을 다루는 것을 고려해 볼 수
            있습니다.
          </S.NotificationMessage>
          {/* <S.NotificationMessage>{notification.message}</S.NotificationMessage> */}
        </S.NotificationContent>
        {/* <S.NotificationBadgeStatus type="warning">주의</S.NotificationBadgeStatus> */}
      </S.NotificationCard>
    ))}
  </S.NotificationSection>
);

export default AINotification;
