import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from '../../../assetComp/card';
import MammothLogo from '../../../assetComp/SVG/fmLogo';
import NeumorphEffect from '../../../effects/neumorphic';

interface iUserInfo {
  userName: string
  title: string
}

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

  },
  avi: {
    flex: 1,
    borderRadius: 77,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    alignContent: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    paddingHorizontal: 32
  },
  subtitle: {
    alignContent: 'center',
    fontSize: 20,
    fontStyle: 'italic',
  }
})



export const UserInfo = (props: iUserInfo) => {
  const neumorphSetting = {
    height: 110,
    width: 110,
    borderRadius: 77,
    shadowColor: '#fff',
    shadowElevation: 1,
    shadowOffsetHeight: 0,
    shadowOffsetWidth: 0,
    shadowOpacity: .5,
    shadowRadius: 10,
    highlightColor: '#000',
    highlightElevation: 1,
    highlightOffsetHeight: -3,
    highlightOffsetWidth: -3,
    highlightOpacity: .5,
    highlightRadius: 10,
    inset: false,

  };

  return (
    <View style={styles.root}>
      <View style={{ alignItems: 'center', padding: 20, borderRadius: 77, backgroundColor: 'transparent' }}>
        <NeumorphEffect {...neumorphSetting}><View style={{ alignContent: 'center', alignSelf: 'center', padding: 10 }}><MammothLogo width={70} fill='black' height={70} /></View></NeumorphEffect>
      </View>
      <View >
        <Text style={styles.title} >{props.userName}</Text>
        <Text>{props.title}</Text>
      </View>
    </View>

  )
};
