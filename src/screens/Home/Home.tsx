import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { tailwind } from "tailwind";
import { Button } from "~/components/Button";
import { Title } from "~/components/Title";
import { RouteParams } from "~/navigation/RootNavigator";

interface HomeProps {}

type ScreenItem = {
  name: string;
  route: keyof RouteParams;
};

const screens: ScreenItem[] = [
  {
    name: "useState",
    route: "UseStateScreen",
  },
  {
    name: "useEffect",
    route: "UseEffectScreen",
  },
  {
    name: "useContext",
    route: "UseContextScreen",
  },
  {
    name: "useRef",
    route: "UseRefScreen",
  },
  {
    name: "useImperativeHandle",
    route: "UseImperativeHandleScreen",
  },
  {
    name: "useReducer",
    route: "UseReducerScreen",
  },
  {
    name: "useCallback",
    route: "UseCallbackScreen",
  },
  {
    name: "useMemo",
    route: "UseMemoScreen",
  },
  {
    name: "useLayoutEffect",
    route: "UseLayoutEffectScreen",
  },
  {
    name: "useEmail",
    route: "UseEmailScreen",
  },
];

export const Home: React.FunctionComponent<HomeProps> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const renderItem: ListRenderItem<ScreenItem> = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate(item.route)}>
        <View
          style={tailwind(
            "bg-white p-4 flex flex-row items-center justify-between"
          )}
        >
          <Text>{item.name}</Text>
          <Text style={tailwind("text-gray-500 text-lg")}>→</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <SafeAreaView style={tailwind("w-full h-full")}>
      <FlatList
        data={screens}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View style={tailwind("h-px bg-gray-200")} />
        )}
        keyExtractor={(item) => item.route}
      />
    </SafeAreaView>
  );
};
