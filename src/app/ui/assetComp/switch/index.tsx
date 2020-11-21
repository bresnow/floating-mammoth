import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import Card from "../../assetComp/card";
import CircleSvg from "../../assetComp/SVG/circle";
import { Colors } from "../../constants/colors"
// import Animated, {useAnimatedStyle, useSharedValue, withSpring, withTiming} from 'react-native-reanimated'


// const switchOn = -65;
// const switchOff = -15
// const animationDuration = 250

// interface iToggle {
//   initialState: number
//   // onEngage: () => void

// }

 

 
  // const slideOffAnim = Animated.timing(animation,
  //   { toValue: -65, duration: 250, easing: Animated.Easing.InOut() })

export const Switch = () => {
  const animation = useRef(new Animated.Value(-65)).current;
//  const [toggled, setToggled] = useState(false);

 const slideOnAnim = Animated.timing(animation,
   { toValue: -15, duration: 250, easing: Animated.Easing.InOut() })

const slideOffAnim = Animated.timing(animation,
   { toValue: -65, duration: 250, easing: Animated.Easing.InOut() })


const slideStyle = StyleSheet.createAnimatedViewStyle({
  transform: [{
    translateX: animation
  }]
});
  
    return (

    <View style={styles.root}>
      <Card height={60} width={30} borderRadius={40} fill={Colors.bluPerp}>
        <GestureView style={{overflow: 'visible'}} onTap={}>
          <Animated.View style={[styles.thumb, slideStyle]} >
            <CircleSvg style={{ transform: [{ translateY: 5 }] }} fill={Colors.coolGrey[1]} width={50} height={50} />
          </Animated.View>
          </GestureView>
      </Card>
    </View>

  );
};


const styles = {
  root: 
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  }),
  thumb: 
    overflow: 'visible',
    alignSelf: 'center',
    flex: 1,
    paddingVertical: 4

  })

}


