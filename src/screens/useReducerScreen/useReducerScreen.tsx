import React, { useReducer } from "react";
import { View } from "react-native";
import { Button } from "~/components/Button";
import { Title } from "~/components/Title";
import { Wrapper } from "~/components/Wrapper";

interface useReducerScreenProps {}

type Action = { type: "increment" } | { type: "decrement" };

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export const useReducerScreen: React.FunctionComponent<useReducerScreenProps> =
  ({}) => {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
      <Wrapper>
        <View>
          <Title>{state}</Title>
          <Button onPress={() => dispatch({ type: "increment" })}>
            Increment
          </Button>
          <Button onPress={() => dispatch({ type: "decrement" })}>
            Decrement
          </Button>
        </View>
      </Wrapper>
    );
  };
