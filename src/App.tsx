import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  padding: 2rem;
  color: black;
  background: papayawhip;
`;

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://yeachan.modie.site/test')
      .then((res) => res.text())
      .then((data) => setMessage(data))
  }, []);

  return (
    <Wrapper>
      마늘의 성 🧄🏰 <br />
      CI/CD 테스트~ <br />
      응답: {message}
    </Wrapper>
  );
}

export default App;
