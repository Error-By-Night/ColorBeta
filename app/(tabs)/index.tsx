import { Pressable, Text, View } from 'react-native';

import { useRouteStore } from '@/stores/routeStore';

export default function ScanHoldScreen() {
  const sampledColor = useRouteStore((state) => state.sampledColor);
  const resetSession = useRouteStore((state) => state.resetSession);

  return (
    <View className="flex-1 items-center justify-center bg-white px-6 dark:bg-neutral-950">
      <Text className="mb-2 text-center text-3xl font-bold text-neutral-900 dark:text-white">
        Scan a Hold
      </Text>
      <Text className="mb-8 text-center text-base text-neutral-600 dark:text-neutral-400">
        Take a photo of a single hold to sample its color. This becomes the reference for
        identifying the rest of the route.
      </Text>

      <View className="mb-8 h-24 w-24 items-center justify-center rounded-2xl border-2 border-dashed border-neutral-300 dark:border-neutral-700">
        {sampledColor ? (
          <View
            className="h-20 w-20 rounded-xl"
            style={{ backgroundColor: sampledColor.hex }}
          />
        ) : (
          <Text className="text-sm text-neutral-400">No color</Text>
        )}
      </View>

      <Pressable className="mb-4 w-full max-w-sm items-center rounded-xl bg-brand px-6 py-4 active:opacity-80">
        <Text className="text-base font-semibold text-white">Capture Hold Photo</Text>
      </Pressable>

      {sampledColor && (
        <Pressable onPress={resetSession} className="active:opacity-60">
          <Text className="text-sm text-neutral-500">Reset session</Text>
        </Pressable>
      )}
    </View>
  );
}
