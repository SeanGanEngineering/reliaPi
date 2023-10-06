import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import { BodyWrapper, FooterWrapper, HeaderWrapper, PageWrapper } from './components/layout/Layout.styled';
import Navigation from './components/navigation/Navigation';
import './global.css';

function App() {

  return (
    <PageWrapper>
    <HeaderWrapper>
      <Navigation />
      <h1>ReliaPi</h1>
    </HeaderWrapper>
    <BodyWrapper>
      <Router>
        <Routes>
          <Route element={<Dashboard />} path='/'/>
        </Routes>
      </Router>
    </BodyWrapper>
    <FooterWrapper>
    </FooterWrapper>
    </PageWrapper>
  )
}

export default App
