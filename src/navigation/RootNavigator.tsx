import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "~/screens/Home";
import { useStateScreen } from "~/screens/useStateScreen";
import { useEffectScreen } from "~/screens/useEffectScreen";
import { useContextScreen } from "~/screens/useContextScreen/useContextScreen";
import { useRefScreen } from "~/screens/useRefScreen";
import { useReducerScreen } from "~/screens/useReducerScreen";
import { useCallbackScreen } from "~/screens/useCallbackScreen";
import { useMemoScreen } from "~/screens/useMemoScreen";
import { useLayoutEffectScreen } from "~/screens/useLayoutEffectScreen";
import { useImperativeHandleScreen } from "~/screens/useImperativeHandleScreen";
import { useEmailScreen } from "~/screens/useEmailScreen";

export type RouteParams = {
  Home: undefined;
  UseStateScreen: undefined;
  UseEffectScreen: undefined;
  UseContextScreen: undefined;
  UseRefScreen: undefined;
  UseImperativeHandleScreen: undefined;
  UseReducerScreen: undefined;
  UseCallbackScreen: undefined;
  UseMemoScreen: undefined;
  UseLayoutEffectScreen: undefined;
  UseEmailScreen: undefined;
};

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="UseStateScreen"
          component={useStateScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="UseEffectScreen"
          component={useEffectScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="UseContextScreen"
          component={useContextScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="UseRefScreen"
          component={useRefScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="UseImperativeHandleScreen"
          component={useImperativeHandleScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="UseReducerScreen"
          component={useReducerScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="UseCallbackScreen"
          component={useCallbackScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="UseMemoScreen"
          component={useMemoScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="UseLayoutEffectScreen"
          component={useLayoutEffectScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="UseEmailScreen"
          component={useEmailScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
