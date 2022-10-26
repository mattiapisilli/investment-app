import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './component/App';
import InvestmentList from './pages/InvestmentList';
import AddInvestment from './pages/AddInvestment';
import EditInvestment from './pages/EditInvestment';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/investments/list" element={<InvestmentList />} />
        <Route path="/investments/create" element={<AddInvestment />} />
        <Route path="/investments/:id/edit" element={<EditInvestment />} />
      </Routes>
    </BrowserRouter>
);
