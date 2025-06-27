import React from 'react';
import ReactMarkdown from 'react-markdown';
import * as S from './style';

interface AutobiographyProps {
  onBack?: () => void;
  autobiographyContent?: string;
  authorName?: string;
  completionDate?: string;
}

const AutobiographyData: React.FC<AutobiographyProps> = ({
  onBack,
  autobiographyContent = `# 어린 시절의 기억

어르신은 어린 시절을 시골에서 보내셨습니다. 그 당시는 지금과는 많이 다른 시대였죠.

## 가족과의 추억

할머니께서는 항상 따뜻한 밥과 함께 옛날 이야기를 들려주셨습니다. 그 이야기들은 지금도 생생히 기억에 남아있습니다.

> "인생은 마라톤과 같다. 빨리 달리는 것보다 끝까지 달리는 것이 중요하다."

이것은 할아버지께서 항상 하시던 말씀이었습니다.

## 학창 시절

- 매일 아침 일찍 일어나 학교에 가기 위해 먼 길을 걸었습니다
- 친구들과 함께 놀며 많은 것을 배웠습니다
- 선생님들의 가르침은 평생의 자산이 되었습니다

그 시절의 경험들이 지금의 제가 있게 해주었습니다.`,
  authorName = '박희진',
  completionDate = '2025년 6월 27일',
}) => {
  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      // 기본 뒤로가기 동작
      window.history.back();
    }
  };

  return (
    <S.MainContainer>
      <S.PageContainer>
        <S.Header>
          <S.BackButton onClick={handleBackClick}>← 뒤로</S.BackButton>
          <S.Author>{authorName} 어르신의 자서전</S.Author>
        </S.Header>

        <S.MainContent>
          <S.TitleCard>
            <S.TitleText>{authorName} 어르신의 이야기</S.TitleText>
            <S.DateText>{completionDate} 완성</S.DateText>
          </S.TitleCard>

          <S.MarkdownContainer>
            <ReactMarkdown>{autobiographyContent}</ReactMarkdown>
          </S.MarkdownContainer>
        </S.MainContent>
      </S.PageContainer>
    </S.MainContainer>
  );
};

export default AutobiographyData;
