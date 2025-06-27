import * as S from './style';

import { GrAnalytics } from 'react-icons/gr';
import { IoFileTrayFull } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const activeTab = pathname.includes('/archive') ? 'record' : 'analysis';

  return (
    <S.Container>
      <S.NavItem active={activeTab === 'analysis'} onClick={() => navigate('/family')}>
        <S.NavIcon>
          <GrAnalytics size={24} />
        </S.NavIcon>
        <S.NavLabel>분석</S.NavLabel>
      </S.NavItem>

      <S.NavItem active={activeTab === 'record'} onClick={() => navigate('/family/archive')}>
        <S.NavIcon>
          <IoFileTrayFull size={24} />
        </S.NavIcon>
        <S.NavLabel>기록</S.NavLabel>
      </S.NavItem>
    </S.Container>
  );
};

export default BottomNavigation;
