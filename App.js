// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();
  const handlePress = () => console.log("text press");
  return (
    <ViewImageScreen />
    // <SafeAreaView style={styles.container}>

    // <Text onPress={handlePress}>
    //   Hello, this is my first test with react native and i want to test how a
    //   text can be so so so long wow
    // </Text>

    /* <Text onPress={handlePress}>
        I am testing this stuff and it is so amazing
      </Text> */

    /* <TouchableOpacity onPress={() => console.log("image tapped")}>
        <Image
          blurRadius={1}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity> */
    /* <Button
        title="Click"
        onPress={() =>
          Alert.alert("Modal", "You clicked on the button", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "NO", onPress: () => console.log("No") },
          ])
        }
      /> */

    /* <StatusBar style="auto" />
    </SafeAreaView> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
