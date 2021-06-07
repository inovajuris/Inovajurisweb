import React from "react";
import { useTransition } from "react-spring";
import { Container } from "./styles";

import Toast from "./Toast";
import { ToastMessage } from "../../hooks/toast";
interface ToastContainerProps {
  messages: ToastMessage[];
  telaBeta?: boolean;
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  messages,
  telaBeta,
}) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: "-120%", opacity: 0 },
      enter: { right: "0%", opacity: 1 },
      leave: { right: "-120%", opacity: 0 },
    }
  );
  console.log("TELAAAA CONTAINER ", telaBeta);
  return (
    <Container style={{ top: telaBeta ? "80%" : "9%" }}>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
