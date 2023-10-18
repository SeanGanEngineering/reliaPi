import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import { LayoutWrapper, ContentWrapper, HeaderWrapper, PageWrapper } from './pages/layout/Layout.styled';
import Navigation from './pages/layout/navigation/Navigation';
import './global.css';
import HeadModule from "./pages/layout/headModule/HeadModule";

function App() {

  return (
    <PageWrapper>
    <HeaderWrapper>
      <Navigation />
    </HeaderWrapper>
    <LayoutWrapper>
      <HeadModule />
    </LayoutWrapper>
    <ContentWrapper>
    <Router>
        <Routes>
          <Route element={<Dashboard />} path='/'/>
        </Routes>
      </Router>
    </ContentWrapper>
    </PageWrapper>
  )
}

export default App
