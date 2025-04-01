import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useFonts } from 'expo-font';

export default function TabLayout() {
  const [loaded, error] = useFonts({
    Inter: require('@/./assets/fonts/Inter-VariableFont.ttf'),
  });

  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.tint,
        tabBarInactiveTintColor: Colors.dark.tint,
        tabBarActiveBackgroundColor: 'rgba(255, 255, 255, 0.1)',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarIconStyle: { display: 'none' },
        tabBarItemStyle: { justifyContent: 'center' },
        tabBarLabelStyle: { fontFamily: 'Inter', fontSize: 20, fontWeight: 'bold', justifyContent: 'center' },
        tabBarPosition: 'top',
        tabBarStyle: {
          backgroundColor: '#D32976',
          height: 60,
          paddingHorizontal: 50,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tally',
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Products',
        }}
      />
      <Tabs.Screen
        name="allocation"
        options={{
          title: 'Allocation',
        }}
      />
      <Tabs.Screen
        name="tally-sheet"
        options={{
          title: 'Tally Sheet',
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
        }}
      />
      <Tabs.Screen
        name="apitester"
        options={{
          title: 'API Tester',
        }}
      />
    </Tabs>
  );
}
