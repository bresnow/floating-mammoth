import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Card from "../../assetComp/card";
import CircleSvg from "../../assetComp/SVG/circle";
import { Colors } from "../../constants/colors";
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
} from "react-native-reanimated";



export const Switch = () => {

  const [switchOn, flipSwitchOn] = useState(0);
  const flip = useSharedValue(switchOn);

  const knobStyle = useAnimatedStyle(() => {
    return {
      translateX: flip.value 
    };
  });








  return (
    <View style={styles.root}>
      <Card borderRadius={40} fill={Colors.bluPerp}>
        <Animated.View>
          <CircleSvg fill={Colors.coolGrey[1]} width={50} height={50} />
        </Animated.View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  thumb: {
    overflow: "visible",
    alignSelf: "center",
    flex: 1,
    paddingVertical: 4,
  },
});
