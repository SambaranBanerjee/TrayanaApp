import { Tabs } from "expo-router";
import React from 'react';

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60, // Adjust height if needed
        },
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: "Sending SOS",
        }}
      />
      <Tabs.Screen 
        name="search"
        options={{
          title: "Search for NGOs",
        }}
      />
      <Tabs.Screen 
        name="videos"
        options={{
          title: "Videos",
        }}
      />
    </Tabs>
  );
};

export default _layout;