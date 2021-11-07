import React, { useRef } from "react";
import { TextInput, View } from "react-native";
import tailwind from "tailwind-rn";
import { Button } from "~/components/Button";
import { Title } from "~/components/Title";
import { Wrapper } from "~/components/Wrapper";

interface useRefScreenProps {}

export const useRefScreen: React.FunctionComponent<useRefScreenProps> =
  ({}) => {
    const myTextInput = useRef<TextInput>(null);

    const focusInput = () => {
      myTextInput.current?.focus();
    };
    return (
      <Wrapper>
        <View>
          <TextInput
            style={tailwind("border-b mb-4")}
            placeholder="Prénom"
            ref={myTextInput}
          />
          <Button onPress={focusInput}>Focus input</Button>
        </View>
      </Wrapper>
    );
  };
