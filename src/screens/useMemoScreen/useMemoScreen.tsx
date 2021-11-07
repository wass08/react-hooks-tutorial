import React, { useMemo, useState } from "react";
import { View } from "react-native";
import { Button } from "~/components/Button";
import { Title } from "~/components/Title";
import { Wrapper } from "~/components/Wrapper";

interface useMemoScreenProps {}

export const useMemoScreen: React.FunctionComponent<useMemoScreenProps> =
  ({}) => {
    const [count, setCount] = useState(60);

    const memoizedCount = useMemo(() => {
      let result = 42;
      result += count;
      result /= 12;
      result *= 666;
      return result;
    }, [count]);
    return (
      <Wrapper>
        <View>
          <Title>Le résultat est {memoizedCount}</Title>
          <Button onPress={() => setCount(count + 1)}>Increment</Button>
        </View>
      </Wrapper>
    );
  };

export default useMemoScreen;
