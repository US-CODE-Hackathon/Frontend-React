import React from 'react';

interface BiographyToastProps {
  onClick: () => void;
  total: number;
}

const BiographyToast: React.FC<BiographyToastProps> = ({ onClick, total }) => {
  return (
    <div onClick={onClick} style={{ padding: '8px 12px', cursor: 'pointer' }}>
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '16px',
          marginBottom: '4px',
          color: '#1a6633',
        }}
      >
        🎉 자서전 생성 가능!
      </div>
      <div style={{ fontSize: '14px', color: '#4d8066' }}>
        {total}개의 이야기가 모였어요. 탭해서 확인하세요!
      </div>
    </div>
  );
};

export default BiographyToast;
