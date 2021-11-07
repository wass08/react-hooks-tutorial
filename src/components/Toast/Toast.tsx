import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Text, View } from "react-native";
import { tailwind } from "tailwind";

interface ToastProps {
  backgroundColor?: string;
}

interface ToastMethods {
  success: (message: string, timeout?: number) => void;
}

export const Toast = forwardRef<ToastMethods, ToastProps>(
  ({ backgroundColor = "white" }, forwardRef) => {
    const [message, setMessage] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const showSuccessMessage = (message: string, timeout: number = 2400) => {
      setMessage(message);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, timeout); // Do not use in prod, should cancel previous timeout before setting a new one
    };

    useImperativeHandle(forwardRef, () => ({
      success: showSuccessMessage,
    }));
    if (!isVisible) {
      return null;
    }

    return (
      <View
        style={tailwind(
          `p-4 bg-${backgroundColor} absolute top-5 inset-x-5 z-10 rounded`
        )}
      >
        <Text>{message}</Text>
      </View>
    );
  }
);
