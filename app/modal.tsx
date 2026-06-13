import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View } from 'react-native';

export default function AboutModal() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6 dark:bg-neutral-950">
      <Text className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">
        About ColorBeta
      </Text>
      <Text className="text-center text-base leading-6 text-neutral-600 dark:text-neutral-400">
        ColorBeta helps colorblind rock climbers identify climbing routes by sampling a hold
        color and highlighting matching holds on the wall.
      </Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
