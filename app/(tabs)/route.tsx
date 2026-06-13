import { Text, View } from 'react-native';

import { useRouteStore } from '@/stores/routeStore';

export default function RouteScreen() {
  const sampledColor = useRouteStore((state) => state.sampledColor);

  return (
    <View className="flex-1 items-center justify-center bg-white px-6 dark:bg-neutral-950">
      <Text className="mb-2 text-center text-3xl font-bold text-neutral-900 dark:text-white">
        Identify Route
      </Text>
      <Text className="mb-8 text-center text-base text-neutral-600 dark:text-neutral-400">
        Capture the climbing wall to highlight all holds that match your sampled color.
      </Text>

      {!sampledColor ? (
        <View className="rounded-xl bg-amber-50 px-4 py-3 dark:bg-amber-950">
          <Text className="text-center text-sm text-amber-800 dark:text-amber-200">
            Scan a hold first on the Scan Hold tab before capturing the wall.
          </Text>
        </View>
      ) : (
        <View className="w-full max-w-sm items-center rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
          <Text className="mb-4 text-sm text-neutral-500">Reference color</Text>
          <View
            className="mb-4 h-16 w-16 rounded-xl"
            style={{ backgroundColor: sampledColor.hex }}
          />
          <Text className="text-center text-sm text-neutral-600 dark:text-neutral-400">
            Wall capture and hold highlighting coming in the next phase.
          </Text>
        </View>
      )}
    </View>
  );
}
