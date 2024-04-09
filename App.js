import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';


const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Outfit': require('./assets/Fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('./assets/Fonts/Outfit-Medium.ttf'),
    'Outfit-Bold': require('./assets/Fonts/Outfit-Bold.ttf'),
  });
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey='pk_test_Y29uY2lzZS1idWNrLTEwLmNsZXJrLmFjY291bnRzLmRldiQ'>
      <View style={styles.container}>
        {/* Sign In Component */}
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
            </NavigationContainer>
        </SignedIn>
        {/* Sign Out */}
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  },
});
