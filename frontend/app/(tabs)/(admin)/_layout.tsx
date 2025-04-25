import { Tabs } from 'expo-router';
import React from 'react';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useFonts } from 'expo-font';
import { IconSymbol } from '@/components/ui/IconSymbol';

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
        tabBarItemStyle: { justifyContent: 'center' },
        tabBarLabelStyle: { fontFamily: 'Inter', fontSize: 16, fontWeight: 'bold', justifyContent: 'center' },
        tabBarPosition: 'top',
        tabBarStyle: {
          justifyContent: 'flex-start',
          backgroundColor: '#D32976',
        },
      }}
    >
      <Tabs.Screen
        name="add-customer"
        options={{
          title: 'Add Customer',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="calculator" color={color} />,
        }}
      />
      <Tabs.Screen
        name="admin-dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="barn" color={color} />,
        }}
      />
      <Tabs.Screen
        name="category-setter"
        options={{
          title: 'Set Category',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="book-multiple-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="customer-allocation"
        options={{
          title: 'Allocate Customers',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="google-spreadsheet" color={color} />,
        }}
      />
      <Tabs.Screen
        name="user-logs"
        options={{
          title: 'User Logs',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="menu" color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="menu" color={color} />,
        }}
      />
      <Tabs.Screen
        name="apitester"
        options={{
          title: 'Tester',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="api" color={color} />,
        }}
      />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  );
}
