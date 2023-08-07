import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from './view/Catalog';
import { Container } from '@mui/material';
import './styles/style.css';
import Home from './view/Home';
import About from './view/About';
import SingleApartPage from './view/SingleApartPage';
import LoginAndRegister from './view/LoginAndRegister';
import Header from './components/Header';
import AdminPanel from './view/AdminPanel';
import MyBooks from "./view/MyBooks";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/singe-apart-page/:id" element={<SingleApartPage />} />
            <Route path="/signin" element={<LoginAndRegister />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/my-books" element={<MyBooks />} />
          </Routes>
        </div>
        <h5 style={{ textAlign: 'center', margin: '20px' }}>2023 dimskill</h5>
      </Container>
    </div>
  );
}

export default App;
