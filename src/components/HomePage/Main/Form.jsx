import { useFormik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  padding: 2em 1em;
  box-shadow: 1px 2px 12px -2px #727070;

  @media screen and (min-width: 600px) {
    margin-right: auto;
    margin-left: auto;
    padding: 2em;
  }

  @media screen and (min-width: 768px) {
    border-radius: var(--border-radius);
    width: 90%;
    border: 1px solid var(--active-color);
    box-shadow: none;
  }
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
  @media screen and (min-width: 1400px) {
    width: 60%;
  }
`;

const Label = styled.label`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  outline: none;
  text-align: center;
  border: none;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--active-color);

  @media screen and (min-width: 600px) {
    padding: 1em;
  }

  &:focus {
    background-color: #cccccc;
    border-bottom: 1px solid var(--primary-color);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  text-align: center;
  outline: none;
  padding: 0.5em;
  resize: none;
  margin-bottom: 20px;
  border: 1px solid var(--active-color);
  background-color: #cccccc;

  @media screen and (min-width: 600px) {
    min-height: 170px;
  }

  &:focus {
    border-bottom: 1px solid var(--primary-color);
  }
`;

const Button = styled.button`
  width: 200px;
  margin-right: auto;
  margin-left: auto;
  border: none;
  padding: 0.8em;
  border-radius: var(--border-radius);
  background-color: var(--primary-color);
  color: var(--text-color);

  @media screen and (min-width: 600px) {
    padding: 1em;
    font-size: 1rem;
  }
  @media screen and (min-width: 1024px) {
    cursor: pointer;
    
    &:active {
      background-color: #0205aa;
      color: hsl(0, 0%, 94.50980392156862%);
    }
  }
`;

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Pflichtfeld'),
      email: Yup.string()
        .email('Ungültige E-Mail-Adresse')
        .required('Pflichtfeld'),
      message: Yup.string().required('Pflichtfeld'),
    }),
    onSubmit: (values, { resetForm }) => {
      // Restablece el formulario después de enviarlo con éxito
      resetForm();

      // Muestra una alerta con react-toastify
      toast.success('Nachricht wurde geschickt', {
        position: 'top-center',
      });
    },
  });

  return (
    <>
      <ToastContainer />
      <FormContainer onSubmit={formik.handleSubmit}>
        <Label>
          <Input
            placeholder="Name"
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </Label>
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <Label>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </Label>
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <Label>
          <TextArea
            placeholder="Nachricht"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
        </Label>
        {formik.touched.message && formik.errors.message ? (
          <div>{formik.errors.message}</div>
        ) : null}

        <Button type="submit">Senden</Button>
      </FormContainer>
    </>
  );
};

export default Form;
