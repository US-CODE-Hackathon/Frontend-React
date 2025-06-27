import { motion } from 'framer-motion';
import * as S from './style';

interface BtnProps {
  children: string;
  onClick?: () => void;
}

const Button = ({ children, onClick }: BtnProps) => {
  return (
    <S.BtnContainer
      as={motion.button}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      onClick={onClick}
    >
      {children}
    </S.BtnContainer>
  );
};

export default Button;