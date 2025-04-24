import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import BusinessProfileSetup from './components/BusinessProfileSetup';
import Dashboard from './components/Dashboard';
import Campaigns from './components/Campaigns';
import { PromoterListSection } from './components/Promoters';
import { PromoterProfilePage } from './pages/PromoterProfilePage';
import Leads from './components/Leads';
import LeadProfilePage from './pages/LeadProfilePage';
import Payout from './components/Payout';
import AIAgentPage from './pages/AIAgentPage';
import Settings from './components/Settings';
import Login from './components/Login';
import Register from './components/Registration';
import ChatPopup from './components/ChatPopup';
import PopupTutorial from './components/PopupTutorial';
import Help from './components/Help';
const AppLayout = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register', '/'].includes(location.pathname);
  const isAIAgentPage = ['/ai-agent'].includes(location.pathname);

  return (
    <div className="flex h-screen bg-[#F5F5F5]">
      {!isAuthPage && <Sidebar />}
      <main className={`${!isAuthPage ? 'flex-1' : 'w-full'} overflow-auto`}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/business-profile-setup" element={<BusinessProfileSetup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/promoters" element={<PromoterListSection />} />
          <Route path="/promoters/:id" element={<PromoterProfilePage />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/leads/:id" element={<LeadProfilePage />} />
          <Route path="/payouts" element={<Payout />} />
          <Route path="/ai-agent" element={<AIAgentPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/*" element={<Login />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>
      {!isAuthPage && !isAIAgentPage && <ChatPopup />}
      {!isAuthPage && <PopupTutorial />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
