import React from 'react';
import RegisterForm from '../components/RegisterForm';
import Box from '@mui/material/Box';
import { Tab, Tabs } from '@mui/material';
import SignInForm from '../components/SignInForm';

const LoginAndRegister = () => {
  const [regOrSignValue, setRegOrSignValue] = React.useState('sign-in');

  const handleChange = (event, newValue) => {
    setRegOrSignValue(newValue);
  };

  return (
    <div>
      <h1>Зарегистрироваться/Войти</h1>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={regOrSignValue} onChange={handleChange} centered>
          <Tab label="Вход" value={'sign-in'} />
          <Tab label="Регистрация" value={'registration'} />
        </Tabs>
      </Box>
      {regOrSignValue === 'registration' ? <RegisterForm /> : <SignInForm />}
    </div>
  );
};

export default LoginAndRegister;
