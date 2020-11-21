import React, { SVGProps } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';


export default function CardCorner(props: any) {
  return (
    <View style={{ flex: 1, padding: 0, margin: 0 }}><Svg fill={props.fill} width={props.borderRadius} height={props.borderRadius}>
      <Path
        d={props.path}

      />
    </Svg></View>
  )
};