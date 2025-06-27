import * as C from '@/allFiles';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Autobiography: React.FC = () => {
  const navigate = useNavigate();

  // 실제 자서전 내용 (서버에서 받아올 데이터)
  const autobiographyMarkdown = `
# 박희진 어르신의 인생 이야기

## 어린 시절 (1940년대)

어르신은 1940년 전라남도 작은 마을에서 태어나셨습니다. 

### 가족 이야기
- **아버지**: 농업에 종사하시며 가족을 책임지셨습니다
- **어머니**: 항상 따뜻한 마음으로 자녀들을 돌보셨습니다
- **형제자매**: 3남 2녀 중 둘째로 태어나셨습니다

> "그 당시는 어려운 시절이었지만, 가족들이 함께 있어서 행복했습니다."

## 청년 시절 (1960년대)

고등학교를 졸업한 후 서울로 올라와 새로운 삶을 시작하셨습니다.

### 첫 직장
서울의 작은 공장에서 일을 시작하셨습니다. 매일 새벽부터 밤늦게까지 일하며 **성실함**과 **근면함**을 몸에 익히셨습니다.

### 만남과 결혼
1965년, 평생의 동반자가 될 분을 만나 결혼하셨습니다. 

## 중년 시절 (1970-1990년대)

가정을 이루고 자녀들을 키우며 바쁜 나날을 보내셨습니다.

### 자녀 교육
- 첫째 아들: 의사가 되어 현재 서울에서 병원을 운영
- 둘째 딸: 교사가 되어 많은 제자들을 가르치고 있음
- 셋째 아들: 사업가가 되어 성공적인 기업을 운영

### 사업과 성공
1980년대에 작은 상점을 시작으로 점차 사업을 확장하셨습니다.

## 노년의 지혜 (2000년대 이후)

은퇴 후에는 손자, 손녀들과 시간을 보내며 인생의 여유를 즐기고 계십니다.

### 인생의 교훈

1. **성실함이 최고의 재산**
2. **가족이 가장 소중한 것**
3. **건강이 최고의 축복**

---

*"지나온 인생을 돌아보니, 힘들었던 순간들도 모두 소중한 경험이었습니다. 앞으로도 건강하게 가족들과 함께 행복한 시간을 보내고 싶습니다."*
  `;

  const handleBackNavigation = () => {
    navigate('/family');
  };

  return (
    <div>
      <C.FamilyAutographyData
        onBack={handleBackNavigation}
        autobiographyContent={autobiographyMarkdown}
        authorName="박희진"
        completionDate="2025년 6월 27일"
      />
    </div>
  );
};

export default Autobiography;
