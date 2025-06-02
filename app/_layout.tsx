import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false, // Ensure the header is hidden to avoid overlapping with tabs
        }}
      />
    </Stack>
  );
}