import '@fontsource/inter';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import { BodyWrapper, FooterWrapper, HeaderWrapper, PageWrapper } from './components/layout/Layout.styled';
import Footer from './components/footer/Footer';
import Drawer from '@mui/joy/Drawer';
import { SwipeableDrawer } from '@mui/material';

function App() {

  return (
    <PageWrapper>
    <HeaderWrapper>
    </HeaderWrapper>
    <BodyWrapper>
      <Router>
        <Routes>
          <Route element={<Dashboard />} path='/'/>
        </Routes>
      </Router>
    </BodyWrapper>
    <FooterWrapper>
     <Footer/>
    </FooterWrapper>
    </PageWrapper>
  )
}

export default App
