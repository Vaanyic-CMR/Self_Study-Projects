import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import ViewImage from './app/screens/ViewImage';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
      // <WelcomeScreen />
      <ViewImage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
