import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(home)" />
      <Tabs.Screen name="auto-dark-mode" />
      <Tabs.Screen name="animation-test" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}