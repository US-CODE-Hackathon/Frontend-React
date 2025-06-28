import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <motion.div
      className="splash-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src="/favicon.svg" alt="로고" width={100}/>
      <h1>마음이 머무는 곳, 정마루</h1>
    </motion.div>
    </div>
  );
};

export default SplashScreen;