import React from "react";
import { View } from "react-native";
import NeumorphEffect from "../../effects/neumorphic";

interface iAvatar {
  pubKey: string;
  friendlyName: string;
  imgSrc: string | React.ReactNode;
}

export const UserInfo = (props: iAvatar) => {
  const neumorphSetting = {
    height: 110,
    width: 110,
    borderRadius: 77,
    shadowColor: "#fff",
    shadowElevation: 1,
    shadowOffsetHeight: 0,
    shadowOffsetWidth: 0,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    highlightColor: "#000",
    highlightElevation: 1,
    highlightOffsetHeight: -3,
    highlightOffsetWidth: -3,
    highlightOpacity: 0.5,
    highlightRadius: 10,
    inset: false,
  };

    return (
    <View
      style={{
        alignItems: "flex-end",
        padding: 20,
        borderRadius: 77,
        backgroundColor: "transparent",
      }}>
      <NeumorphEffect {...neumorphSetting}>
        <View
          style={{
            alignItems: "flex-end",
            padding: 20,
            borderRadius: 77,
            backgroundColor: "transparent",
            overflow: "hidden",
          }}>{props.imgSrc}</View>
      </NeumorphEffect>
    </View>
  );
};
