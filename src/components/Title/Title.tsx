import React from "react";
import { Text, View } from "react-native";
import { tailwind } from "tailwind";

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FunctionComponent<TitleProps> = ({ children }) => {
  return (
    <Text style={tailwind("text-center font-bold text-xl mb-4")}>
      {children}
    </Text>
  );
};
