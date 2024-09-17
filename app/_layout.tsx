import { Stack } from 'expo-router';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <Stack>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </RootSiblingParent>
    </SafeAreaProvider>
  );
}