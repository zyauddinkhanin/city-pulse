import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ToolbarProps } from '../utils/types';

const CustomToolbar = ({
  title,
  subTitle,
  subTitleStyle,
  onPress,
  customStyle,
  leftIconStyle,
  titleStyle,
  rightIcon,
  rightIconStyle,
  onPressRight,
  leftIcon,
}: ToolbarProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.toolbar,
        { paddingTop: insets.top, height: 50 + insets.top },
        customStyle,
      ]}
    >
      {leftIcon ? (
        <TouchableOpacity
          onPress={onPress}
          hitSlop={styles.hitSlopStyle}
          style={[styles.headerIcon, leftIconStyle]}
        >
          {leftIcon}
        </TouchableOpacity>
      ) : (
        <View style={[styles.headerIcon, leftIconStyle]} />
      )}
      <View style={styles.titleView}>
        <Text style={[styles.headerTitle, titleStyle]}>{title}</Text>
        {subTitle ? (
          <Text style={[styles.headerTitle, subTitleStyle]}>{subTitle}</Text>
        ) : null}
      </View>
      {rightIcon ? (
        <TouchableOpacity
          onPress={onPressRight}
          hitSlop={styles.hitSlopStyle}
          style={[styles.headerIcon, rightIconStyle]}
        >
          {rightIcon}
        </TouchableOpacity>
      ) : (
        <View style={[styles.headerIcon, rightIconStyle]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    height: 70,
    backgroundColor: 'rgba(176, 129, 234, 1)',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  titleView: { flex: 1, marginHorizontal: 5 },
  headerTitle: {
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginHorizontal: 0.5,
    color: 'white',
  },
  headerIcon: {
    height: 24,
    width: 24,
    color: 'white',
  },
  hitSlopStyle: {
    top: 15,
    right: 15,
    bottom: 15,
    left: 15,
  },
});

export default CustomToolbar;
