import React, { SVGProps } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export interface iCardCorner extends SVGProps<SVGElement> {
  borderRadius: number;
}
export default function CardCorner(props: iCardCorner) {
  return (
    <View
      style={{
        flex: 1,
        padding: 0,
        margin: 0,
        overflow: 'visible',
        width: props.borderRadius,
      }}>
      <Svg
        width={props.borderRadius}
        height={props.borderRadius}
        viewBox="0 0 55 55">
        <Path d={props.path} fill={props.fill} fillRule="evenodd" />
      </Svg>
    </View>
  );
}
