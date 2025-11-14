import { router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const Signup = () => {
  return (
    <View>
      <Text>Signup</Text>
      <Button title="sign In" onPress={() => router.push("/sign-up")} />
    </View>
  );
};

///test

export default Signup;
