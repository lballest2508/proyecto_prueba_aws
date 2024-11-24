import { Stack, IconButton, InputAdornment, Alert } from '@mui/material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider, { RHFTextField } from '../../../../components/hook-form';

const BusinessData = forwardRef((props, ref) => {
  const schema = Yup.object().shape({
    businessName: Yup.string().required('Business name is Required'),
    zipCode: Yup.number().min(5, 'Must be 5 characters').required('Zip code is required'),
  });
  const methods = useForm({
    resolver: yupResolver(schema),
  });

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
        <RHFTextField label="Business Name" name="businessName" />
        <RHFTextField label="Zip Code" name="zipCode" type="number" />
      </Stack>
    </FormProvider>
  );
});

export default BusinessData;
