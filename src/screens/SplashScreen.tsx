import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import screens from '../utils/screens';
import { replace } from '../navigation';
import { LocalizationContext } from '../contexts/LocalizationContext';

export default function SplashScreen() {
  const { strings } = useContext(LocalizationContext);
  useEffect(() => {
    const t = setTimeout(() => replace(screens.Home), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={styles.center}>
      <Text style={styles.titleText}>{strings.appName}</Text>
      <Text style={styles.subTitle}>{strings.appDesc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  titleText: { fontSize: 24, fontWeight: '700' },
  subTitle: { marginTop: 8 },
});
