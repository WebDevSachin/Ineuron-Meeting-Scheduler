import { firebaseDefaultApp } from './config';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';

import Test from './pages/Test';
import { ProtectedLayout } from './components/ProtectedLayout';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<Test />} />
        {/* <Route path="settings" element={<SettingsPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
