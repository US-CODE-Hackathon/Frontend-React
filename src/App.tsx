import * as R from './allFiles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './Splash';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <SplashScreen key={'splash'} />
      ) : (
        <Router>
          <Routes>
            <Route element={<R.KioskMain />} path="/" />
            <Route element={<R.KioskOnGoing />} path="/ongoing" />
            <Route element={<R.KioskCamera />} path="/camera" />
            <Route element={<R.KioskForwarding />} path="/forwarding" />
            <Route element={<R.ForwardingSuccess />} path="/forwarding/success" />
            <Route path="/family">
              <Route element={<R.FamilyMain />} index />
              <Route element={<R.FamilyArchive />} path="archive" />
              <Route element={<R.FamilyArchiveDetail />} path="archive/:id" />
              <Route element={<R.FamilyAutobiography />} path="congrates" />
              <Route element={<R.FamilyAutography />} path="autobiography/view" />
            </Route>
          </Routes>
        </Router>
      )}
    </AnimatePresence>
  );
}

export default App;
