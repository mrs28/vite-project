import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  FormBox,
  InputName,
  InputEmail,
  InputDescription,
  FormButtonBox,
  FormButton,
} from "./styles";

const Form: React.FC = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    description: "",
  });

  // const [error, setError] = useState(false);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    const messageCopied = { ...message };
    if (name == "name") {
      if (value.length < 5) {
        messageCopied.name = "DEBES SER MAYOR A 5";
      } else {
        messageCopied.name = "";
      }
    } else if (name == "email") {
      if (!value.includes("@")) {
        messageCopied.email = "te falta una @";
      } else {
        messageCopied.email = "";
      }
    }

    setMessage(messageCopied);
    setUserData({ ...userData, [name]: value });
    // console.log(e.target.value);
    // console.log(e.target.name);
  };
  //c/u de las propiedades de userData ya tiene un valor
  //console.log("todos", userData);

  // ***************************************

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("soy el evento de handlesubmit", e);

    if (validatedFields()) {
      console.log("form validado");
    } else {
      console.log("error de validación");
    }
  };

  const validatedFields = () => {
    if (userData.name.length < 5) {
      return false;
    }

    const characterIncluded = userData.email.includes("@");
    if (!characterIncluded) {
      return false;
    }
    return true;
  };

  // useEffect(() => {
  //   validatedFields();
  // }, [userData]);

  return (
    <FormBox onSubmit={handleSubmit}>
      <InputName
        type="text"
        name="name"
        placeholder="Your Name"
        required
        onChange={handleChange}
      />
      <span>{message.name}</span>

      <InputEmail
        type="email"
        name="email"
        placeholder="Your E-mail"
        required
        onChange={handleChange}
      />
      <span>{message.email}</span>

      <InputDescription
        type="text"
        name="description"
        placeholder="Describe your idea"
        required
        pattern="[A-Za-z0-9\s]+"
        onChange={handleChange}
      />
      <span>{message.description}</span>

      <FormButtonBox>
        <FormButton type="submit">Send</FormButton>
        <ArrowForwardIcon />
      </FormButtonBox>
    </FormBox>
  );
};

export default Form;

// useEffect(() => {
//   validatedFields();
// }, [userData]);
// efecto secundario
// el efecto secundario se ejecutará c/vez que haya un cambio en el estado de userData
// useEfect se ejecuta después que el componente se renderice o actualice
//validatedFields() es la función que se ejecuta como efecto.
// [userData] es el array de dependencias y el efecto se ejecuta c/ves que este array cambie
//RESUMEN: En resumen, este useEffect está siendo utilizado para llamar a la función validatedFields cada vez que hay un cambio en el estado de userData
