import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../Card';
import CircleSvg from '../SVG/circle';
import {color} from '../../colors';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const Switch = () => {
  const [flip, setFlip] = useState(false);
  const animation = useSharedValue(flip);

  const knobStyle = useAnimatedStyle(() => {
    return {
      translateX: animation.value === true ? 50 : 0,
    };
  });

  const toggle = () => setFlip(!flip);

  return (
    <View style={styles.root}>
      <Card
        borderRadius={40}
        fill={animation.value === true ? color.bluPerp : color.sky}>
        <TapGestureHandler onGestureEvent={toggle}>
          <Animated.View style={styles.thumb && knobStyle}>
            <CircleSvg fill={color.coolGrey[1]} width={50} height={50} />
          </Animated.View>
        </TapGestureHandler>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumb: {
    overflow: 'visible',
    alignSelf: 'center',
    flex: 1,
    paddingVertical: 4,
  },
});
