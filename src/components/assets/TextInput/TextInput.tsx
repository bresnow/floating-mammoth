import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import NeumorphEffect from '../../effects/neumorphic';
import Card, {CardProps} from '../Card/Card';

interface iTextInput extends CardProps {
  icon?: React.ReactNode;
}

export function InputComp(props: iTextInput) {
  const outset = {
    shadowColor: '#000',
    highlightColor: '#fff',
  };
  const inset = {
    shadowColor: '#fff',
    highlightColor: '#000',
  };

  const [focus, setFocus] = useState(outset);

  return (
    <NeumorphEffect
      borderRadius={props.borderRadius + 5}
      shadowElevation={1}
      shadowOffsetHeight={0}
      shadowOffsetWidth={0}
      shadowRadius={0}
      highlightElevation={0}
      highlightOffsetHeight={0}
      highlightOffsetWidth={0}
      highlightRadius={0}
      {...focus}>
      <Card fill="red" borderRadius={22}>
        <View
          style={{
            height: 33,
            width: 33,
            flexDirection: 'row',
          }}>
          <TextInput
            style={{
              flex: 1,
              backgroundColor: 'blue',
            }}
            autoFocus={false}
            onFocus={() => setFocus(inset)}
            onBlur={() => setFocus(outset)}
          />
          <View style={{position: 'absolute', right: props.width}}>
            {props.icon}
          </View>
        </View>
      </Card>
    </NeumorphEffect>
  );
}
