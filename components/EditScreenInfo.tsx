import React, { useEffect } from 'react';
import { StyleSheet, AppRegistry, Animated, Easing } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
export default function EditScreenInfo({ generatedMessage }: { generatedMessage: string }) {
  let animatedValue = new Animated.Value(0);
  const animate = () => {
    animatedValue.setValue(0)
    Animated.timing(animatedValue,
      {
        useNativeDriver: false,
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start()
  }
  const marginLeft = animatedValue.interpolate({
    inputRange: [0.1, 1],
    outputRange: [0, 300]
  })
  const opacity = animatedValue.interpolate({
    inputRange: [0.1, 1],
    outputRange: [0, 1]
  })
  const movingMargin = animatedValue.interpolate({
    inputRange: [0,  1],
    outputRange: [0, 300,]
  })
  const textSize = animatedValue.interpolate({
    inputRange: [0.1, 1],
    outputRange: [1, 14]
  })
  const rotateX = animatedValue.interpolate({
    inputRange: [0,  1],
    outputRange: ['0deg', '180deg']
  })

  useEffect(() => {
    animate()
  }, []);

  return (
    <View>
      <View style={styles.getStartedContainer}>

        <Animated.Text
          style={{
            // fontSize: textSize,
            marginTop: 10,
            color: 'black',
            opacity: opacity,
            // transform:[{rotateX:rotateX}]s
          }} >
          {generatedMessage}

        </Animated.Text>

        {/* <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
        </Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
