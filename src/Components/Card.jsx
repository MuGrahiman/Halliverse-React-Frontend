import React from "react";
import {
  CardContainer,
  CardImage,
  CardTitle,
  CardDescription,
  CardCategory,
  CardPrice,
} from "../StyledComponents/cardStyle.js";

const Card = ({
  image,
  title,
  Email,
  Avialable,
  Gender,
  Domain,
  Flex,
  firstName,
  lastName,
}) => {
  return (
    <CardContainer flex={Flex}>
      <CardImage src={image} alt={title} />
      <div>
        <CardTitle>{firstName + " " + lastName}</CardTitle>
        <CardDescription>{Email}</CardDescription>
        <CardDescription>Domain: {Domain}</CardDescription>
        {/* <CardCategory>Gender: {Gender}</CardCategory> */}
        <CardCategory>Gender: {Gender}</CardCategory>

        <CardPrice color={Avialable ? "#42de42" : "#de4242"}>
          Avialable{Avialable}
        </CardPrice>
        {/* <input type="checkbox" /> */}
      </div>
    </CardContainer>
  );
};

export default Card;
