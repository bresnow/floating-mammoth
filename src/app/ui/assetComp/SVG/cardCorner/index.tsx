import React, { SVGProps } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export interface iCardCorner extends SVGProps<typeof SVGElement> {
  borderRadius: number
}
export default function CardCorner(props: iCardCorner) {
  return (
    <View style={{ flex: 1, padding: 0, margin: 0 }}><Svg fill={props.fill} width={props.borderRadius} height={props.borderRadius}>
      <Path
        d={props.path}

      />
    </Svg></View>
  )
};