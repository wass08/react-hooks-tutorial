import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "~/components/Button";
import { Title } from "~/components/Title";
import { Wrapper } from "~/components/Wrapper";

interface useStateScreenProps {}

export const useStateScreen: React.FunctionComponent<useStateScreenProps> =
  ({}) => {
    const [count, setCount] = useState(0);

    return (
      <Wrapper>
        <View>
          <Title>{count}</Title>
          <Button onPress={() => setCount(count + 1)}>Increment</Button>
        </View>
      </Wrapper>
    );
  };
