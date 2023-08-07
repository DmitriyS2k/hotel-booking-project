import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Alert, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import userStore from '../store/userStore';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Не менее 3-ух символов').required('Обязательно'),
    password: Yup.string()
      .min(2, 'Не менее 3-ух символов')
      .required('Обязательно'),
  });

  const { signInMethod } = userStore;

  const navigate = useNavigate();

  const [errorMessageVisible, setErrorMessageVisible] = useState('0');

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          password: '',
        }}
        validateOnBlur
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          signInMethod(values.name, values.password).then((value) => {
            value ? navigate('/') : setErrorMessageVisible('1');
          });
        }}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          dirty,
        }) => (
          <Form style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={'register-form-container'}>
              <TextField
                id="name"
                label="name"
                variant="outlined"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name && Boolean(errors.name) && true}
                helperText={touched.name && errors.name}
              />
              <TextField
                id="password"
                label="password"
                variant="outlined"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password && touched.password}
                helperText={touched.password && errors.password}
              />
              <Button
                variant="contained"
                type="submit"
                disabled={!isValid && !dirty}
              >
                Войти
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <Alert severity="error" style={{ opacity: errorMessageVisible }}>
          Неправильный логин или пароль!
        </Alert>
      </div>
      <div className="hepler-text-signform">
        <p>log: Dima / pass: qwerty1</p>
        <p>log: Katya / pass: qwerty</p>
      </div>
    </div>
  );
};

export default observer(SignInForm);
