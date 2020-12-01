import React from 'react';
import {StyleSheet, View} from 'react-native';

export interface NeumorphProps {
  children?: React.ReactNode;
  borderRadius: number;
  fill?: string;

  // shadow props

  shadowElevation: number;
  shadowRadius: number;
  shadowColor: any;
  shadowOffsetWidth: number;
  shadowOffsetHeight: number;

  //highlight props

  highlightElevation: number;
  highlightRadius: number;
  highlightColor: any;
  highlightOffsetWidth: number;
  highlightOffsetHeight: number;
}

export default function NeumorphEffect(props: NeumorphProps & React.ReactNode) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      overflow: 'visible',
      backgroundColor: props.fill,
    },
    shadowProps: {
      flex: 1,
      overflow: 'visible',
      shadowOffset: {
        width: props.shadowOffsetWidth,
        height: props.shadowOffsetHeight,
      },
      shadowRadius: props.shadowRadius,
      shadowColor: props.shadowColor,
      elevation: props.shadowElevation,
      borderRadius: props.borderRadius + 2,
    },
    highlightProps: {
      flex: 1,
      overflow: 'visible',
      shadowOffset: {
        width: props.highlightOffsetWidth,
        height: props.highlightOffsetHeight,
      },
      shadowRadius: props.highlightRadius,
      shadowColor: props.highlightColor,
      elevation: props.highlightElevation,
      borderRadius: props.borderRadius + 2,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.shadowProps}>
        <View style={styles.highlightProps}>{props.children}</View>
      </View>
    </View>
  );
}
