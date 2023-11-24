import React from "react";
import {
  GetInTouchContainer,
  GetInTouchTitle,
  GetInTouchTittleBox,
  GetInTouchTitleLeft,
} from "./styles";
import Form from "../Form/Form";
// import FormFormik from "../FormFormik/FormFormik";

const GetInTouch: React.FC = () => {
  return (
    <GetInTouchContainer>
      <GetInTouchTittleBox>
        <GetInTouchTitleLeft>
          Share your future plans with us
        </GetInTouchTitleLeft>
        <GetInTouchTitle>Get in Touch</GetInTouchTitle>
      </GetInTouchTittleBox>

      <Form />
      {/* <FormFormik/> */}
    </GetInTouchContainer>
  );
};

export default GetInTouch;
