import * as S from './style';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 

const RenderSkeleton = () => (
  <S.MainContent>
    <S.SectionTitle>기록 목록</S.SectionTitle>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {[...Array(30)].map(
        (
          _,
          index, // 3개의 스켈레톤 카드 표시
        ) => (
          <div key={index} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Skeleton width={60} height={60} style={{ borderRadius: 16 }} /> {/* 썸네일 */}
            <div style={{ flex: 1 }}>
              <Skeleton height={20} width="60%" style={{ marginBottom: '8px' }} /> {/* 제목 */}
              <Skeleton height={16} width="40%" /> {/* 요약 */}
            </div>
          </div>
        ),
      )}
    </div>
  </S.MainContent>
);
export default RenderSkeleton