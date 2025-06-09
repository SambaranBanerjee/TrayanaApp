import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import React from 'react';

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
        },
        tabBarActiveTintColor: '#FF0000', // Red color for active tab
        tabBarInactiveTintColor: '#808080', // Gray color for inactive tabs
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: "SOS",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="exclamation-triangle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="search"
        options={{
          title: "NGOs",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="videos"
        options={{
          title: "Videos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="videocam" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;