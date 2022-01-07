import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HomeWrapper} from './home.styled';
import EncodeBase64 from '@/components/encode-base64';

function Home() {
  return (
    <HomeWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EncodeBase64 />} />
          <Route path="base64" element={<EncodeBase64 />} />
        </Routes>
      </BrowserRouter>
    </HomeWrapper>
  );
}

export default Home;
