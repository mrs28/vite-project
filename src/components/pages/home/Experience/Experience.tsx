import React from "react";
import {
  ExperienceContainer,
  ExperienceBoxText,
  ExperienceTextBoxLeft,
  ExperienceTextBoxCenter,
  ExperienceTextBoxRight,
  ExperienceText,
  ItemList,
  ItemTextBox,
} from "./styles";

const Experience: React.FC = () => {
  return (
    <ExperienceContainer>
      <ExperienceBoxText>
        <ExperienceTextBoxLeft>
          <ExperienceText>Experience</ExperienceText>
        </ExperienceTextBoxLeft>

        <ExperienceTextBoxCenter>
          <ExperienceText>
            Are you <br /> looking to?
          </ExperienceText>
        </ExperienceTextBoxCenter>

        <ExperienceTextBoxRight>
          <ItemTextBox>
            <ItemList src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1698274626/logo_2_wc5jwp.png" />
            <ExperienceText>
              Expand your business limitlessly, reaching beyond borders.
            </ExperienceText>
          </ItemTextBox>

          <ItemTextBox>
            <ItemList src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1698274626/logo_2_wc5jwp.png" />
            <ExperienceText>
              Achieve a strong brand presence and establish credibility.
            </ExperienceText>
          </ItemTextBox>

          <ItemTextBox>
          <ItemList src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1698274626/logo_2_wc5jwp.png" />
          <ExperienceText>
          Be there for your customers 24/7/365.
          </ExperienceText>
          </ItemTextBox>

          <ItemTextBox>
          <ItemList src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1698274626/logo_2_wc5jwp.png" />
          <ExperienceText>
          Build customer loyalty and ensure stellar performance.
          </ExperienceText>
          </ItemTextBox>
          
          <ItemTextBox>
          <ItemList src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1698274626/logo_2_wc5jwp.png" />
           <ExperienceText>
              
              Deliver hyper-personalization and foster effective communication.
            </ExperienceText>
          </ItemTextBox>
          
        </ExperienceTextBoxRight>
      </ExperienceBoxText>
    </ExperienceContainer>
  );
};

export default Experience;
