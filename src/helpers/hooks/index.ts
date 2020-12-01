import {useState} from 'react';
import {LayoutChangeEvent} from 'react-native';

//ex. const [width, height, onLayout] = useContainerDimensions();

export const useContainerDimensions = () => {
  const [dimensions, setDimensions] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const onLayout = (event: LayoutChangeEvent) => {
    const {x, y, width, height} = event.nativeEvent.layout;
    setDimensions({x: x, y: y, width: width, height: height});
  };
  return dimensions.width, dimensions.height, onLayout;
};

export const useContainerPosition = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const onLayout = (event: LayoutChangeEvent) => {
    const {x, y, width, height} = event.nativeEvent.layout;
    setPosition({x: x, y: y, width: width, height: height});
  };
  return [position.x, position.y, onLayout];
};
