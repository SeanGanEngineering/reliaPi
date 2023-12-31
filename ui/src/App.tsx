import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import {
  LayoutWrapper,
  ContentWrapper,
  HeaderWrapper,
  PageWrapper,
} from './pages/layout/Layout.styled';
import Navigation from './pages/layout/navigation/Navigation';
import './global.css';
import HeadModule from './pages/layout/headModule/HeadModule';
import TestDetails from './pages/testDetails/TestDetails';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TestTest from './pages/testTest/TestTest';
import TestMonitor from './pages/testMonitor/TestMonitor';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
      <Router>
        <PageWrapper>
          <HeaderWrapper>
            <Navigation />
          </HeaderWrapper>
          <LayoutWrapper>
            <HeadModule />
          </LayoutWrapper>
          <ContentWrapper>
            <Routes>
              <Route element={<Dashboard />} path='/' />
              <Route element={<TestDetails />} path='/plan' />
              <Route element={<TestTest />} path='/test' />
              <Route element={<TestMonitor />} path='/monitor' />
            </Routes>
          </ContentWrapper>
        </PageWrapper>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
