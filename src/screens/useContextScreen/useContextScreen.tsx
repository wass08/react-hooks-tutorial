import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { Title } from "~/components/Title";
import { Wrapper } from "~/components/Wrapper";
import { FoodContext } from "~/contexts/FoodContext";

interface useContextScreenProps {}

export const useContextScreen: React.FunctionComponent<useContextScreenProps> =
  ({}) => {
    const food = useContext(FoodContext);
    return (
      <Wrapper>
        <View>
          <Title>{food.meal}</Title>
        </View>
      </Wrapper>
    );
  };
