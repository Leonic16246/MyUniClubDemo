import { View, type ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: ThemeColor;
  safe?: boolean;
};

export function ThemedView({ style, safe = false, lightColor, darkColor, type, ...otherProps }: ThemedViewProps) {
  const theme = useTheme();

  if (!safe) {
    return <View style={[{ backgroundColor: theme[type ?? 'background'] }, style]} {...otherProps} />;
  }

  return <SafeAreaView style={[{ backgroundColor: theme[type ?? 'background'] }, style]} {...otherProps} />;

}
