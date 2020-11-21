import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './src/app/ui/assetComp/card';
import { UserInfo } from './src/app/ui/contentComp/modules/userInfo';
import { Playground } from './src/app/ui/contentComp/screens/playground';
import NeumorphEffect from './src/app/ui/effects/neumorphic';
import { Colors } from './src/app/ui/constants/colors';
//import {FlingGestureHandler} from 'react-native-gesture-handler'
const neumorphSetting = {
  height: 110,
  width: 110,
  borderRadius: 32,
  shadowColor: "#000",
  shadowElevation: 1,
  shadowOffsetHeight: 0,
  shadowOffsetWidth: 0,
  shadowOpacity: 0.5,
  shadowRadius: 10,
  highlightColor: "#fff",
  highlightElevation: 1,
  highlightOffsetHeight: -3,
  highlightOffsetWidth: -3,
  highlightOpacity: 0.5,
  highlightRadius: 10,
  inset: false,
};

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          padding: 20,
          borderRadius: 35,
          backgroundColor: "transparent",

        }}>
        <NeumorphEffect {...neumorphSetting}>
          <Card fill={Colors.coolGrey[1]} borderRadius={2} >
            <UserInfo userName="Username" title="title" />
          </Card>


        </NeumorphEffect>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.sky
  },
});
