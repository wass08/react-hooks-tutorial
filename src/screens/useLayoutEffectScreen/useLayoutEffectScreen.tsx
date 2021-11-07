import React, { useDebugValue, useLayoutEffect, useRef, useState } from "react";
import { LayoutChangeEvent, Text, View } from "react-native";
import { tailwind } from "tailwind";
import { Button } from "~/components/Button";
import { Title } from "~/components/Title";
import { Wrapper } from "~/components/Wrapper";

interface useLayoutEffectScreenProps {}

//const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare ad ea primum, si videtur; Tamen a proposito, inquam, aberramus. Iam id ipsum absurdum, maximum malum neglegi. Scrupulum, inquam, abeunti; Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt; Claudii libidini, qui tum erat summo ne imperio, dederetur. Duo Reges: constructio interrete. Duo enim genera quae erant, fecit tria. ALIO MODO. Illud urgueam, non intellegere eum quid sibi dicendum sit, cum dolorem summum malum esse dixerit.`;
const sampleText = `J'aime les pizzas`;

export const useLayoutEffectScreen: React.FunctionComponent<useLayoutEffectScreenProps> =
  ({}) => {
    const textRef = useRef<Text>(null);
    const [expandable, setExpandable] = useState(false);
    const [expanded, setExpanded] = useState(false);

    // Logique ReactJs
    // useLayoutEffect(() => {
    //   textRef.current?.measure((x, y, width, height) => {
    //     console.log("measured", height);
    //     if (height > 48) {
    //       setExpandable(true);
    //     }
    //   });
    // });

    const onTextLayout = (event: LayoutChangeEvent) => {
      // Façon de faire React Native
      //   if (event.nativeEvent.layout.height > 48) {
      //     setExpandable(true);
      //   }
    };

    return (
      <Wrapper>
        <View>
          <Title>Layout Effect</Title>
          <Text
            ref={textRef}
            onLayout={onTextLayout}
            style={[tailwind(expandable && !expanded ? "h-12" : "")]}
          >
            {sampleText}
          </Text>
          {expandable && (
            <Button onPress={() => setExpanded(!expanded)}>
              {expanded ? "Ferme moi" : "Ouvre moi"}
            </Button>
          )}
        </View>
      </Wrapper>
    );
  };
