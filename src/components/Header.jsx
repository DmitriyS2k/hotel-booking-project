import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import userStore from '../store/userStore';
import { observer } from 'mobx-react-lite';

const Header = () => {
  const navigate = useNavigate();
  const navigateToRegisterPage = () => {
    navigate('/signin');
  };

  const { isAuthenticated, signInUserData, signOut } = userStore;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <nav className={'main-menu'}>
              <ul>
                <li>
                  <Link to="/">Главная</Link>
                </li>
                <li>
                  <Link to="/catalog">Каталог</Link>
                </li>
                <li>
                  <Link to="/aboutus">О нас</Link>
                </li>
              </ul>
            </nav>

            {isAuthenticated ? (
              <div className="right-button-group">
                <div>Здравствуйте {signInUserData.name}</div>
                {signInUserData.isAdmin ? (
                  <Button
                    color="inherit"
                    onClick={() => {
                      navigate('/admin-panel');
                    }}
                  >
                    Admin Panel
                  </Button>
                ) : null}
                <Button
                  color="inherit"
                  onClick={() => {
                    navigate('/my-books');
                  }}
                >
                  Моя бронь
                </Button>
                <Button
                  color="inherit"
                  onClick={() => {
                    signOut();
                    navigate('/signin');
                  }}
                >
                  Выйти
                </Button>
              </div>
            ) : (
              <Button color="inherit" onClick={() => navigateToRegisterPage()}>
                Войти
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default observer(Header);
