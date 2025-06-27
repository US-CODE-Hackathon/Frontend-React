import * as R from './allFiles'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   fetch('https://yeachan.modie.site/test')
  //     .then((res) => res.text())
  //     .then((data) => setMessage(data))
  // }, []);

  return (
    <Router>
      <Routes>
        <Route element={<R.KioskMain />} path='/'/>
      </Routes>
    </Router>
  );
}

export default App;
