import React, { useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import CardCorner, { iCardCorner } from '../SVG/cardCorner';


export interface CardProps {
  // height?: number | any
  // width?: number | any
  children?: React.ReactNode
  // container?: void
  // columnContainer?: void
  //NOTE: mandatory card attributes-- height, width. 
}


export const subtract = (a: number, b: number) => a - b;

export const topLeft = "M.004 55H55V0C24.645 0 0 12.926 0 54.154c0 .283.001.565.004.846z";
export const topRight = "M54.996 55H0V0c30.355 0 55 12.926 55 54.154 0 .283-.001.565-.004.846z";
export const bottomLeft = "M.004 0H55v55C24.645 55 0 42.074 0 .846 0 .563.001.281.004 0z";
export const bottomRight = "M54.996 0H0v55C30.355 55 55 42.074 55 .846c0-.283-.001-.565-.004-.846z";


// Card surface 

export default function Card(props: CardProps & iCardCorner) {

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  function onLayout() {
    (event: LayoutChangeEvent) => {
      const { x, y, width, height } = event.nativeEvent.layout;
      setDimensions({ width: width, height: height });
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
       backgroundColor: props.fill,
      borderRadius: props.borderRadius,
      


    },
    columnContainer: {
      flexDirection: 'column',
      alignContent: 'center',
      width: props.borderRadius,
      height: dimensions.height,


    },
    endView: {
      flexDirection: 'column',
      alignContent: 'center',
      padding: 0,
      height: dimensions.height - props.borderRadius * 2,
      width: props.borderRadius,
      marginVertical: -.05,

    },
    contentSpace: {
      flexDirection: 'column',
      alignContent: 'center',
      width: dimensions.width
    },
    contentSpace2: {
      flex: 1,
      alignSelf: 'center',
      alignContent: 'center',
      marginRight: dimensions.width,
      marginBottom: dimensions.height,
      padding: 32
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        <CardCorner path={topLeft} borderRadius={props.borderRadius} fill={props.fill} />
        <View style={styles.endView}>
        </View>
        <CardCorner path={bottomLeft} borderRadius={props.borderRadius} fill={props.fill} />
      </View>
      <View style={styles.contentSpace}>
        <View style={{ paddingVertical: 32 }}></View></View>
      <View style={styles.columnContainer}><CardCorner path={topRight} borderRadius={props.borderRadius} fill={props.fill} />
        <View style={styles.endView}>
        </View>
        <CardCorner path={bottomRight} borderRadius={props.borderRadius} fill={props.fill} />
      </View>
      <View onLayout={onLayout} style={styles.contentSpace2}><View style={{ right: props.borderRadius }}>{props.children}</View></View>
    </View>

  );
}
//NOTE: move the onLayout dimensions params to the child component and make them props in the card component