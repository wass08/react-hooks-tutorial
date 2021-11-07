import React, { useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button } from "~/components/Button";
import { Title } from "~/components/Title";
import { Wrapper } from "~/components/Wrapper";

interface useCallbackScreenProps {}

export const useCallbackScreen: React.FunctionComponent<useCallbackScreenProps> =
  ({}) => {
    const [count, setCount] = React.useState(0);

    const handler = useCallback(() => {
      console.log(`Pressé ${count} fois !`);
    }, [count]);

    return (
      <Wrapper>
        <View>
          <Title>Bonjour</Title>
          <Button onPress={handler}>Presse moi</Button>
          <Button onPress={handler}>Presse moi</Button>
          <Button onPress={handler}>Presse moi</Button>
          <Button onPress={handler}>Presse moi</Button>
          <Button onPress={handler}>Presse moi</Button>
          <Button
            onPress={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </Button>
        </View>
      </Wrapper>
    );
  };
