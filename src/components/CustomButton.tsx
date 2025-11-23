import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CustomButtonProps } from '../utils/types';

const CustomButton = ({
  title,
  style,
  titleStyle,
  onPress,
  ...rest
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      {...rest}
    >
      <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '60%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  titleStyle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomButton;
