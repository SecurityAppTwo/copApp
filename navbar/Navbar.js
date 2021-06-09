import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../components/Home.js';
import Report from '../components/Report.js';
import Identification from '../components/identification.js';
import Map from '../components/Map.js';

const Tab = createMaterialTopTabNavigator();

export default function Navbar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition='bottom'
      tabBarOptions={{
        style: { height: 50 },
        activeTintColor: 'rgba(0, 102, 204, 0.8)',
        inactiveTintColor: '#000000',
        showIcon: true,
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'בית',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarLabel: 'דיווח',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="radio-handheld" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Identification"
        component={Identification}
        options={{
          tabBarLabel: 'זיהוי חשוד',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="fingerprint" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'מפה',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={24} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

