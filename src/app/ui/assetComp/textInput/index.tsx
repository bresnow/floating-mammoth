import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { CardCornerProps } from '../SVG/cardCorner';
import NeumorphEffect from '../../../../../ui/effects/neumorphic';

interface iTextInput {
  icon?: React.ReactNode 
}



export function InputComp(props: iTextInput & CardCornerProps) {

  const outset = {
    shadowColor:'#000',
    highlightColor:'#fff'
}
const inset = {
  shadowColor:'#fff',
  highlightColor:'#000'
}

const [focus, setFocus] = useState(outset);

  return (

      <NeumorphEffect
    borderRadius={props.borderRadius + 5}
    shadowElevation={1}
    shadowOffsetHeight={0}
    shadowOffsetWidth={0}
    shadowRadius={10}
    highlightElevation={1}
    highlightOffsetHeight={-3}
    highlightOffsetWidth={-3}
    highlightRadius={10}
    {...focus}
  ><TextInput style={{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent'
  }} autoFocus={false} onFocus={() => setFocus(inset)} onBlur={() => setFocus(outset)} />
  <View style={{position:"absolute", right: props.width  }}>{props.icon}</View>
  </NeumorphEffect>
  );
};

