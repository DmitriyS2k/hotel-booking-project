import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Alert, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import userStore from '../store/userStore';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Не менее 3-ух символов').required('Обязательно'),
    phone: Yup.number().typeError('Должно быть числом').required('Обязательно'),
    password: Yup.string()
      .min(2, 'Не менее 3-ух символов')
      .required('Обязательно'),
  });

  const [successMesageVisible, setSuccessMesageVisible] = useState('0');

  const { registerNewUser } = userStore;

  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          password: '',
        }}
        validateOnBlur
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          const result = { ...values, bookApartByUser: [], isAdmin: false };
          registerNewUser(result);
          setSuccessMesageVisible('1');
          setTimeout(() => {
            navigate('/catalog');
          }, 2000);
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
          handleSubmit,
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
                id="phone"
                label="phone"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                error={touched.phone && Boolean(errors.phone) && true}
                helperText={touched.phone && errors.phone}
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
                Зарегистрироваться
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          opacity: successMesageVisible,
        }}
      >
        <Alert severity="success">
          Вы успешно зарегистрированы! Переходим к каталогу...
        </Alert>
      </div>
    </div>
  );
};

export default RegisterForm;
