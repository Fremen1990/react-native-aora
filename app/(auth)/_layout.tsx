import React from "react";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// TODO: 1:30:00
// https://www.youtube.com/watch?v=ZBCUegTZF7M&ab_channel=JavaScriptMastery

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;
