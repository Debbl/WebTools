import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {
  base32Encode,
  base32Decode,
  base64Encode,
  base64Decode
} from '@/utils/base-transform';
import Base from './pages/base';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path="base32"
            element={
              <Base
                key="base32"
                baseEncode={base32Encode}
                baseDecode={base32Decode}
              />
            }
          />
          <Route
            path="base64"
            element={
              <Base
                key="base64"
                baseEncode={base64Encode}
                baseDecode={base64Decode}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
