import { Pressable, Text, View } from 'react-native';

import type { ColorblindMode } from '@/core/color/types';
import { useRouteStore } from '@/stores/routeStore';

const COLORBLIND_MODES: { label: string; value: ColorblindMode }[] = [
  { label: 'None', value: 'none' },
  { label: 'Protanopia', value: 'protanopia' },
  { label: 'Deuteranopia', value: 'deuteranopia' },
  { label: 'Tritanopia', value: 'tritanopia' },
];

export default function SettingsScreen() {
  const colorTolerance = useRouteStore((state) => state.colorTolerance);
  const colorblindMode = useRouteStore((state) => state.colorblindMode);
  const setColorTolerance = useRouteStore((state) => state.setColorTolerance);
  const setColorblindMode = useRouteStore((state) => state.setColorblindMode);

  return (
    <View className="flex-1 bg-white px-6 pt-8 dark:bg-neutral-950">
      <Text className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">
        Settings
      </Text>

      <View className="mb-8">
        <Text className="mb-2 text-base font-semibold text-neutral-900 dark:text-white">
          Color tolerance
        </Text>
        <Text className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
          How closely a hold must match the sampled color. Increase in dim or mixed lighting.
        </Text>
        <View className="flex-row items-center justify-between">
          <Pressable
            onPress={() => setColorTolerance(Math.max(5, colorTolerance - 5))}
            className="rounded-lg bg-neutral-100 px-4 py-2 dark:bg-neutral-800">
            <Text className="font-semibold text-neutral-900 dark:text-white">−</Text>
          </Pressable>
          <Text className="text-lg font-medium text-neutral-900 dark:text-white">
            {colorTolerance}
          </Text>
          <Pressable
            onPress={() => setColorTolerance(Math.min(50, colorTolerance + 5))}
            className="rounded-lg bg-neutral-100 px-4 py-2 dark:bg-neutral-800">
            <Text className="font-semibold text-neutral-900 dark:text-white">+</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <Text className="mb-2 text-base font-semibold text-neutral-900 dark:text-white">
          Colorblind simulation
        </Text>
        <Text className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
          Preview how holds may appear under different types of color vision deficiency.
        </Text>
        <View className="gap-2">
          {COLORBLIND_MODES.map((mode) => (
            <Pressable
              key={mode.value}
              onPress={() => setColorblindMode(mode.value)}
              className={`rounded-xl border px-4 py-3 ${
                colorblindMode === mode.value
                  ? 'border-brand bg-brand/10'
                  : 'border-neutral-200 dark:border-neutral-800'
              }`}>
              <Text
                className={`font-medium ${
                  colorblindMode === mode.value
                    ? 'text-brand'
                    : 'text-neutral-900 dark:text-white'
                }`}>
                {mode.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}
