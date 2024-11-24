import { Stack, IconButton, InputAdornment, Alert } from '@mui/material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider, { RHFTextField } from '../../../../components/hook-form';

const LoginInfo = forwardRef((props, ref) => {
  const schema = Yup.object().shape({
    email: Yup.string().email('This is not a valid Email').required('E-mail is required'),
    password: Yup.string().required('Password is required'),
  });
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;
  const { formData, setFormData, page, setPage } = props;
  const onSubmit = (data) => {
    setPage(page + 1);

    console.log(page);
    setFormData({
      ...formData,
      ...data,
    });
  };

  const onError = (error) => {
    console.log(error);
    setPage(page);
  };

  useImperativeHandle(ref, () => ({
    submitForm() {
      handleSubmit(onSubmit, onError)();
    },
  }));

  return (
    <FormProvider methods={methods}>
      <Stack spacing={2.5}>
        <RHFTextField label="E-mail" name="email" />
        <RHFTextField label="Password" name="password" type="password" />
      </Stack>
    </FormProvider>
  );
});

export default LoginInfo;
