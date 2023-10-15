import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import { LayoutWrapper, ContentWrapper, HeaderWrapper, PageWrapper } from './components/layout/Layout.styled';
import Navigation from './components/navigation/Navigation';
import './global.css';
import HeadModule from "./components/headModule/HeadModule";

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
