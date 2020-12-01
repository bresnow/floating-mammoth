import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function CircleSvg(props: any) {
  return (
    <View style={props.style}>
      <Svg
        fill={props.fill}
        width={props.width}
        height={props.width}
        viewBox="0 0 155 152">
        <Path d="M77.125 1C34.696 1 .25 24.178.25 76c0 57.098 34.446 75 76.875 75C119.553 151 154 133.098 154 76c0-52.01-34.447-75-76.875-75z" />
      </Svg>
    </View>
  );
}
