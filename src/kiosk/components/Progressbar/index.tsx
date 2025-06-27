import * as S from './style'

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <S.LoadingContainer>
      <S.ProgressContainer>
        <S.ProgressBarFill progress={progress} />
      </S.ProgressContainer>
    </S.LoadingContainer>
  );
};

export default ProgressBar;