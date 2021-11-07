import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { tailwind } from "tailwind";
import { Title } from "~/components/Title";
import { Wrapper } from "~/components/Wrapper";
import { useEmail } from "~/hooks/useEmail";

interface useEmailScreenProps {}

export const useEmailScreen: React.FunctionComponent<useEmailScreenProps> =
  ({}) => {
    const { email, loading } = useEmail();
    return (
      <Wrapper>
        <View>
          <Title>Your email is</Title>
          {loading ? (
            <ActivityIndicator color="black" />
          ) : (
            <Text style={tailwind("text-center")}>{email}</Text>
          )}
        </View>
      </Wrapper>
    );
  };
