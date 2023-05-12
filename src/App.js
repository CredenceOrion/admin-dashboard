import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import './App.css';

function App() {
  return (
    <>
    <div>
test
    </div>
    <Router>
      <Routes>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/users" component={UsersPage} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
