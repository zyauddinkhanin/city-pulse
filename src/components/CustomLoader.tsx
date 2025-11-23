import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import { FullScreenLoaderProps } from '../utils/types';

const FullScreenLoader = ({
  visible,
  size = 'large',
  color = '#ffffff',
  overlayColor = 'rgba(0, 0, 0, 0.2)',
}: FullScreenLoaderProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={[styles.overlay, { backgroundColor: overlayColor }]}>
        <ActivityIndicator size={size} color={color} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FullScreenLoader;
