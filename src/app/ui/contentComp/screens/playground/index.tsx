/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../../../assetComp/card";
import { InputComp } from "../../../assetComp/textInput";
//import { Switch } from '../../../assetComp/switch';
import NeumorphEffect from "../../../effects/neumorphic";
import { UserInfo } from "../../modules/userInfo";
import { Colors } from '../../../constants/colors';
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

export const Playground = () => {
  return (
    <View style={styles.root}>
      <View
        style={{
          alignItems: "center",
          padding: 20,
          borderRadius: 35,
          backgroundColor: "transparent",

        }}>
        <NeumorphEffect {...neumorphSetting}>
          <Card fill="transparent" borderRadius={32} >
            <UserInfo userName="Username" title="title" />
          </Card>


        </NeumorphEffect>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.coolGrey[1],
    justifyContent: "center",
  },
  welcome: {
    textAlign: "center",
  },
});
