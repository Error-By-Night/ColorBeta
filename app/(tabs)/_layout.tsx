import { SymbolView } from 'expo-symbols';
import { Tabs } from 'expo-router';

import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Scan Hold',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'camera.viewfinder',
                android: 'camera',
                web: 'camera',
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="route"
        options={{
          title: 'Route',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'mountain.2.fill',
                android: 'landscape',
                web: 'landscape',
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'gearshape.fill',
                android: 'settings',
                web: 'settings',
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}
