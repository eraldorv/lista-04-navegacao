import { SymbolView } from 'expo-symbols';
import { Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarLabelPosition: 'beside-icon',
        headerShown: false,
      }}
    >
      {/* Exercício 1 */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Exercício 1',
          tabBarLabel: '1',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: '1.circle.fill',
                android: 'numeric_1_circle_fill',
                web: 'code',
              }}
              tintColor={color}
              size={26}
            />
          ),
        }}
      />

     
      <Tabs.Screen
        name="tela2"
        options={{
          href: null, 
        }}
      />

      <Tabs.Screen
        name="tela3"
        options={{
          href: null, 
        }}
      />

      {/* Exercício 2 */}
      <Tabs.Screen
        name="two"
        options={{
          title: 'Exercício 2',
          tabBarLabel: '2',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: '2.circle.fill',
                android: 'numeric_2_circle_fill',
                web: 'code',
              }}
              tintColor={color}
              size={26}
            />
          ),
        }}
      />

      {/* Exercício 3 */}
      <Tabs.Screen
        name="three"
        options={{
          title: 'Exercício 3',
          tabBarLabel: '3',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: '3.circle.fill',
                android: 'numeric_3_circle_fill',
                web: 'code',
              }}
              tintColor={color}
              size={26}
            />
          ),
        }}
      />
    </Tabs>
  );
}