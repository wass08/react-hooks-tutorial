import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { tailwind } from "tailwind";
import { Button } from "~/components/Button";
import { Title } from "~/components/Title";
import { Wrapper } from "~/components/Wrapper";

interface useEffectScreenProps {}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const useEffectScreen: React.FunctionComponent<useEffectScreenProps> =
  ({}) => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    // 1
    useEffect(() => {
      console.log("component mounted");
      return () => {
        console.log("component unmounted");
      };
    }, []);

    // 2
    useEffect(() => {
      setLoading(true);
      const fakeApiCall = async () => {
        await delay(2000);
        setLoading(false);
      };
      fakeApiCall();
      return () => {
        console.log("state will change / cancel API call ?");
      };
    }, [count]);

    return (
      <Wrapper>
        <View>
          {loading ? (
            <ActivityIndicator color="black" style={tailwind("mb-4")} />
          ) : (
            <Title>{count}</Title>
          )}
          <Button onPress={() => setCount(count + 1)}>Increment</Button>
        </View>
      </Wrapper>
    );
  };
