import * as S from './style';

interface BiographyProgress {
  current: number;
  total: number;
  isComplete: boolean;
}

interface BiographySectionProps {
  progress: BiographyProgress;
  onClick?: () => void;
}

const BiographySection = ({ progress, onClick }: BiographySectionProps) => (
  <S.BiographyCard onClick={onClick}>
    <S.BiographyIcon />
    <S.BiographyInfo>
      <S.BiographyTitle>어르신의 자서전 만들기</S.BiographyTitle>
      <S.BiographySubtitle>
        현재 {progress.current}개의 소중한 이야기가 모였습니다
      </S.BiographySubtitle>
      <S.ProgressBackground>
        <S.ProgressBar progress={(progress.current / progress.total) * 100} />
      </S.ProgressBackground>
      <S.BiographyStatus>완성! 자서전을 만들 수 있어요</S.BiographyStatus>
    </S.BiographyInfo>
  </S.BiographyCard>
);

export default BiographySection;
