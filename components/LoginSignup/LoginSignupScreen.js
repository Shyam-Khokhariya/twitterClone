import React, { useRef } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LoginSignupScreen({ navigation }) {
  const loadingProgress = useRef(new Animated.Value(0)).current;
  Animated.timing(loadingProgress, {
    toValue: 100,
    duration: 500,
    useNativeDriver: true, // This is important!
  }).start();
  const opacityClearToVisible = {
    opacity: loadingProgress.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 0.3, 1],
      extrapolate: "clamp",
    }),
  };

  const appScale = {
    transform: [
      {
        scale: loadingProgress.interpolate({
          inputRange: [0, 100],
          outputRange: [1.5, 1],
        }),
      },
    ],
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Animated.View
        style={[opacityClearToVisible, appScale, styles.allScreenView]}
      >
        <View style={{ flex: 1 }}>
          <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
          <View style={styles.topLogo}>
            <Image
              style={styles.logo}
              source={require("../assets/images/logo1.png")}
            />
          </View>
          <View style={styles.signupView}>
            <Text style={styles.signupText}>
              See what's happening in the world right now.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("SignupScreen");
              }}
            >
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Create Account</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.loginView}>
            <Text style={styles.loginText}>
              Have an account already?{" "}
              <Text
                style={styles.login}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                Log in
              </Text>
            </Text>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  allScreenView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 50,
    width: 50,
  },
  signupView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    fontWeight: "700",
    fontSize: 26,
    textAlign: "center",
  },
  button: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    backgroundColor: "#1DA1F2",
    marginTop: 10,
    borderRadius: 50,
  },
  buttonText: {
    paddingVertical: 15,
    paddingHorizontal: 50,

    color: "#fff",
    fontSize: 22,
  },
  loginView: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  loginText: {
    fontSize: 18,
    fontWeight: "500",
  },
  login: {
    color: "#1DA1F2",
  },
});
