import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Text, StyleSheet, ToastAndroid, Pressable } from 'react-native';
import Toast from 'react-native-root-toast';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  function showAndroidToast() {
    ToastAndroid.show('This is an Android Toast!', ToastAndroid.SHORT);
  }

  function showCrossPlatformToast() {
    let toast = Toast.show('This is a cross-platform Toast!', {
      duration: Toast.durations.LONG,
    })

    setTimeout(() => Toast.hide(toast), 3000);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <Link href="./details" style={styles.link}>Details</Link>
      <Pressable onPress={showAndroidToast} style={[styles.button, { backgroundColor: '#3DDC84' }]}>
        <Ionicons name="logo-android" size={24} color="white" />
        <Text style={[styles.buttonText, { paddingLeft: 10 }]}>Android Toast</Text>  
      </Pressable>

      <Pressable onPress={showCrossPlatformToast} style={styles.button}>
        <Ionicons name="logo-apple" size={24} color="white" />
        <Text style={[styles.buttonText, { paddingLeft: 10 }]}>Cross Plastform Toast</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    textDecorationLine: 'underline',
    color: 'blue',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    flexDirection: 'row',
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});