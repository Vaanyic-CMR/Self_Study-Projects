import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { StatusBar } from 'expo-status-bar';
import {
  Dimensions,
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
  // console.log(Dimensions.get("screen")) // Get diminsion info. does not support multiple orientations.
  // console.log(useDimensions());
  // console.log(useDeviceOrientation())

  const { landscape, portrait } = useDeviceOrientation();

  const handlePress = () => console.log("Text Clicked");

  return (
    // <SafeAreaView style={[styles.container]}>
    //   <Text onPress={handlePress}>
    //     Hello React Native | A really really long text. Now I wanna make this even longer and see what happens!
    //   </Text>
    //   <Image 
    //     // fadeDuration={1000} // Only works on Android.
    //     source={{
    //       uri: "https://picsum.photos/200/300",
    //       width: 200,
    //       height: 300
    //     }}
    //   />
    //   {/* <Button title='Click Me!' onPress={() => Alert.prompt("My title", "My message")} /> */}
    //   <Button title='Click Me!' onPress={() => alert("Button pressed")} />
    //   <StatusBar style="auto" />
    // </SafeAreaView>

    // <SafeAreaView style={[styles.container]}> // Set orientation in app.json to "default"
    //   <View style={{
    //     backgroundColor: 'dodgerblue',
    //     width: '100%',
    //     height: landscape ? '100%' : '40%',
    //   }}>
    //   </View>
    // </SafeAreaView>

    <View 
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // default column
        justifyContent: "center", // aligns by main axis determined by flexDirection.
        alignItems: "center", // aligns by secondary axis 90 deg of flex direction. Also, when there are more rows, aligns items within each row.
        alignContent: "center", // Aligns all rows by secondary axis, only works with wraping.
        // flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          // flexBasis: 100, // eq to setting width or height depending on flex direction.
          // flexGrow: 1, // causes object to grow to fill availible space.
          // flexShrink: 1, // if you have overflow, shrinks the object to fit availible space.
          width: 100,
          height: 100,
          // alignSelf: "flex-start"
        }}
      ></View>
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          top: 20, // Allows you to move position relative to other objects without moving the other objects. top, bottom, left, right.
          left: 20,
          // position: "absolute" // positions relative to its parent, reordering other objects.
        }}
      ></View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      ></View>
      {/* <View
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100,
        }}
      ></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0, // Platform specific styles.
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
