import React, { useState, useRef, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';
import AuthRegisterForm from '../../../sections/auth/AuthRegisterForm';
import { LoginInfo, BusinessData, PersonalInfo } from './default';
import axios from '../../../utils/axios';

const RegisterSteps = () => {
  const [page, setPage] = useState(0);
  const stateRef = useRef();
  const [formData, setFormData] = useState({
    businessName: '',
    zipCode: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    birthDate: '',
    phoneNumber: '',
    socialSecurityNumber: '',
  });
  const [errorHandler, setErrorHandler] = useState(false);

  const nextForm = (e) => {
    stateRef.current.submitForm(e);
  };

  const registerUser = async () => {
    const { data } = await axios.post('/api/account/register', formData);
  };

  useEffect(() => {
    console.log(formData);
    if (page > 2) {
      registerUser();
      setPage(0);
    }
  }, [formData, errorHandler, page]);

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return (
          <BusinessData
            page={page}
            setPage={setPage}
            ref={stateRef}
            formData={formData}
            setFormData={setFormData}
            getError={setErrorHandler}
          />
        );
      case 1:
        return (
          <LoginInfo
            page={page}
            setPage={setPage}
            ref={stateRef}
            formData={formData}
            setFormData={setFormData}
            getError={setErrorHandler}
          />
        );
      case 2:
        return (
          <PersonalInfo
            page={page}
            setPage={setPage}
            ref={stateRef}
            formData={formData}
            setFormData={setFormData}
            getError={setErrorHandler}
          />
        );
      default:
        return (
          <BusinessData
            page={page}
            setPage={setPage}
            ref={stateRef}
            formData={formData}
            setFormData={setFormData}
            getError={setErrorHandler}
          />
        );
    }
  };

  return (
    <div>
      {conditionalComponent()}
      <LoadingButton
        onClick={(e) => {
          nextForm(e);
        }}
        style={{
          marginTop: 20,
        }}
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={false}
        sx={{
          bgcolor: 'text.primary',
          color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          '&:hover': {
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          },
        }}
      >
        {page >= 2 ? 'Create Account' : 'Next'}
      </LoadingButton>
    </div>
  );
};

export default RegisterSteps;
