import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tailwind from "tailwind-rn";
import { Card } from "../Card";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FunctionComponent<WrapperProps> = ({
  children,
}) => {
  return (
    <SafeAreaView
      style={tailwind("bg-gray-300 h-full flex items-center justify-center")}
    >
      <Card>
        <View style={tailwind("p-5 py-10 w-64")}>{children}</View>
      </Card>
    </SafeAreaView>
  );
};

export default Wrapper;
