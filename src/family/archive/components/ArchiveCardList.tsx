import * as S from './style';
import * as C from '@/allFiles';
import * as T from './type';

const ArchiveCardList: React.FC<{
  notifications: T.ArchiveData[];
  onNotificationClick?: (notification: T.ArchiveData) => void;
}> = ({ notifications, onNotificationClick }) => {
  if (notifications.length === 0) {
    return <S.EmptyState>아직 등록된 알림이 없습니다.</S.EmptyState>;
  }

  return (
    <S.NotificationContainer>
      {notifications.map(notification => (
        <C.FamilyArchiveCard
          key={notification.id}
          data={notification}
          onClick={() => onNotificationClick?.(notification)}
        />
      ))}
    </S.NotificationContainer>
  );
};

export default ArchiveCardList;
