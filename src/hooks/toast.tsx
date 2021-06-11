import React, { createContext, useCallback, useContext, useState } from "react";
import { uuid } from "uuidv4";
import ToastContainer from "../Components/ToastContainer";

export interface ToastMessage {
  id: string;
  type?: "sucess" | "error" | "info";
  title: string;
  description?: string;
  telaBeta?: boolean;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, "id">): void;
  removeToast(id: string): void;
}
const ToastContext = createContext<ToastContextData>({} as ToastContextData);
const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);
  const [tela, setTela] = useState(false);
  const addToast = useCallback(
    ({ type, title, description, telaBeta }: Omit<ToastMessage, "id">) => {
      const id = uuid();
      const toast = {
        id,
        type,
        title,
        description,
        telaBeta,
      };
      console.log("Dentro", telaBeta);
      setTela(telaBeta);
      setMessages((state) => [...state, toast]);
    },
    []
  );
  console.log("teste dd", tela);
  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}

      <ToastContainer messages={messages} telaBeta={tela} />
    </ToastContext.Provider>
  );
};
function useToast(): ToastContextData {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used whithin a ToastProvider");
  }
  return context;
}

export { ToastProvider, useToast };
