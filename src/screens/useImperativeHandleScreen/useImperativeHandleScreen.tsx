import React, { ElementRef, useRef } from "react";
import { View } from "react-native";
import { Button } from "~/components/Button";
import { Title } from "~/components/Title";
import { Toast } from "~/components/Toast";
import { Wrapper } from "~/components/Wrapper";

interface useImperativeHandleScreenProps {}

export const useImperativeHandleScreen: React.FunctionComponent<useImperativeHandleScreenProps> =
  ({}) => {
    const toastRef = useRef<ElementRef<typeof Toast>>(null);

    const orderSlice = () => {
      toastRef.current?.success("Et voici une merveilleuse part de pizza 🍕 !");
    };

    return (
      <>
        <Toast ref={toastRef} />
        <Wrapper>
          <View>
            <Title>Envie de Pepperoni Pizza ???</Title>
            <Button onPress={orderSlice}>Commander 🍕</Button>
          </View>
        </Wrapper>
      </>
    );
  };
