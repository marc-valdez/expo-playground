import PatrickStar from '@/assets/svgs/patrick_star';
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function SettingsLayout() {
  const insets = useSafeAreaInsets();
  const [loaded, error] = useFonts({
    Inter_900Black,
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  
  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View style={ styles.container }>
        <View style={ styles.settings }>
          <Ionicons name="settings-outline" size={20} color="black" />
          <Text style={{ fontFamily: 'Inter_900Black', paddingLeft: 10 }}>Settings</Text>
        </View>
        <Text style={{ fontFamily: 'Inter-SemiBoldItalic', fontSize: 20 }}>Online Font: Inter-SemiBoldItalic</Text>

        <PatrickStar />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settings: {
    flexDirection: 'row',
  }
});