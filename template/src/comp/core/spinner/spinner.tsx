//external dependencies
import { memo, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
//external types dependencies
//internal dependencies
import SpinnerSvg from './img/spinner.svg';
//internal types dependencies

export const Spinner = memo(() => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 360,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              rotate: rotateAnim.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        },
      ]}>
      <SpinnerSvg className="" width={55} height={55} />
    </Animated.View>
  );
});