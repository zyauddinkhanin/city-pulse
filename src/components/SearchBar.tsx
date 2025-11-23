import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SearchProps } from '../utils/types';
import { LocalizationContext } from '../contexts/LocalizationContext';
import CustomButton from './CustomButton';

export default function SearchBar({ onSearch }: SearchProps) {
  const [keyword, setKeyword] = useState('');
  const [city, setCity] = useState('');
  const { strings } = useContext(LocalizationContext);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={strings.keyword}
        value={keyword}
        placeholderTextColor={'grey'}
        onChangeText={setKeyword}
        style={styles.input}
      />
      <TextInput
        placeholder={strings.city}
        value={city}
        placeholderTextColor={'grey'}
        onChangeText={setCity}
        style={styles.input}
      />
      <CustomButton
        title={strings.search}
        onPress={() => onSearch(keyword, city)}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    width: '32%',
    height: 40,
    paddingLeft: 10,
    fontWeight: '400',
    fontSize: 14,
    color: 'black',
  },
  button: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    width: '32%',
    height: 40,
    backgroundColor: 'rgba(176, 129, 234, 1)',
  },
});
