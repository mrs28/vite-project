import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Formik, FormikHelpers, FormikErrors } from "formik";
import {
  FormBox,
  InputName,
  InputEmail,
  InputDescription,
  FormButtonBox,
  FormButton,
  // FormButtonTest,
} from "./styles";

interface FormValues {
  name: string;
  email: string;
  description: string;
}

const FormFormik: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    description: "",
  };

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    // Aquí puedes realizar acciones con los valores del formulario
    console.log(values);
    actions.setSubmitting(false); // Importante para indicar que la subida ha terminado
    console.log("soy test button");
    // validatedFields(initialValues);
  };

  const validatedFields = (initialValues: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (initialValues.name.length < 5) {
      errors.name = "El nombre debe ser mayor a 5 caracteres";
    }
    //devulve el objeto de errores

    const characterIncluded = initialValues.email.includes("@");

    if (!characterIncluded) {
      errors.email = "ingresa un @";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validatedFields}
    >
      {({ handleSubmit, values, handleChange, handleBlur, errors }) => (
        <FormBox onSubmit={handleSubmit}>
          {/* <Label htmlFor="name" /> */}
          <InputName
            type="text"
            name="name"
            placeholder="Your name"
            required
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <div> {errors.name} </div>}

          <InputEmail
            type="email"
            name="email"
            placeholder="Your E-mail"
            required
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <div> {errors.email} </div>}

          <InputDescription
            type="text"
            name="description"
            placeholder="Describe your ideas"
            required
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* <FormButtonTest type="submit">TEST</FormButtonTest> */}

          <FormButtonBox>
            <FormButton type="submit">Send</FormButton>
            <ArrowForwardIcon />
          </FormButtonBox>
        </FormBox>
      )}
    </Formik>
  );
};

export default FormFormik;
