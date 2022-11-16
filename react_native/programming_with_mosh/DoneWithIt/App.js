import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
} from 'react-native';

// <View></View> --> <div></div>
export default function App() {
  // console.log(require("./assets/icon.png"))

  const handlePress = () => console.log("Text Clicked")

  return (
    <SafeAreaView style={[styles.container]}>
      <Text onPress={handlePress}>
        Hello React Native | A really really long text. Now I wanna make this even longer and see what happens!
      </Text>
      <Image 
        // fadeDuration={1000} // Only works on Android.
        source={{
          uri: "https://picsum.photos/200/300",
          width: 200,
          height: 300
        }}
      />
      {/* <Button title='Click Me!' onPress={() => Alert.prompt("My title", "My message")} /> */}
      <Button title='Click Me!' onPress={() => alert("Button pressed")} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0, // Platform specific styles.
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
