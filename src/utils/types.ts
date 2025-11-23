import {
  Dimensions,
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export interface EventCardData {
  id: string;
  name: string;
  image: string | null;
  venue: string;
  city: string;
  date: string;
  info?: string;
}

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Details: { event: EventCardData };
  Profile: undefined;
};

export type Lang = 'en' | 'ar';

export type SearchProps = {
  onSearch: (keyword: string, city: string) => void;
  placeholder?: string;
};

export interface ToolbarProps {
  title: string;
  subTitle?: string;
  subTitleStyle?: TextStyle;
  onPress?: () => void;
  customStyle?: ViewStyle;
  leftIconStyle?: ViewStyle;
  titleStyle?: TextStyle;
  rightIcon?: React.ReactNode;
  rightIconStyle?: ViewStyle;
  onPressRight?: () => void;
  leftIcon?: React.ReactNode;
}

export interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export interface FullScreenLoaderProps {
  visible: boolean;
  size?: 'small' | 'large';
  color?: string;
  overlayColor?: string;
}

export const Language = {
  en: 'en',
  ar: 'ar',
  EN: 'EN',
  AR: 'AR',
};

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;
