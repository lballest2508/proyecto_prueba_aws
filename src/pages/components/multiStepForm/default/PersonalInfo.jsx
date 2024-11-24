import { Stack, IconButton, InputAdornment, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { forwardRef, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider, { RHFTextField } from '../../../../components/hook-form';

const PersonalInfo = forwardRef((props, ref) => {
  const methods = useForm();

  const { register, handleSubmit } = methods;

  const { formData, setFormData, page, setPage } = props;
  const onSubmit = (data) => {
    setPage(page + 1);

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
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField label="First Name" name="firstName" />
          <RHFTextField label="Last Name" name="lastName" />
        </Stack>
        <RHFTextField label="Address" name="address" />
        <RHFTextField label="City" name="city" />
        <RHFTextField label="State" name="state" />
        <RHFTextField label="Birth Date" name="birthDate" />
        <RHFTextField label="Phone Number" name="phoneNumber" type="number" />
      </Stack>
    </FormProvider>
  );
});

export default PersonalInfo;
