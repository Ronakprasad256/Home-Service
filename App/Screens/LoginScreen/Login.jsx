import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import * as WebBrowser from "expo-web-browser";
import React from 'react';
import color from '../../../utils/color';
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        style={styles.Image}
        source={require('./../../../assets/Image/screen.png.png')}
      />
      <View style={styles.subContainer}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            textAlign: 'center',
          }}
        >
          Let's Find
          <Text style={{ fontSize: 27, color: 'white', fontWeight: 'bold' }}>
            {' '}
            Professional Cleaning and Repair
          </Text>{' '}
          Service
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            textAlign: 'center',
            marginTop: 20,
          }}
        >
          Best App to Find Services Near You which Delivers You a Professional
          Service
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <View>
            <Text style={{ color: color.violet, fontSize: 17, }}>Let's Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: 230,
    height: 455,
    marginTop: 70,
    borderColor: color.black,
    borderRadius: 20,
    borderWidth: 2,
  },
  subContainer: {
    backgroundColor: color.violet,
    width: '100%',
    height: 400,
    marginTop: -20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderTopColor: 'cyan',
    borderTopWidth: 1,
    padding: 20,
  },
  button: {
    alignItems: 'center',
    marginTop: 70,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
  }
});
