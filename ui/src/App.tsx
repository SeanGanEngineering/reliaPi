import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Test from './components/Test';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Test />} path='/'/>
      </Routes>
    </Router>
  )
}

export default App
