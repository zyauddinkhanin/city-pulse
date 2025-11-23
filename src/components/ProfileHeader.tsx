import { useContext } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { LocalizationContext } from '../contexts/LocalizationContext';

const ProfileHeader = () => {
  const { strings } = useContext(LocalizationContext);
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{strings.dummyUser}</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(176, 129, 234, 1)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
export default ProfileHeader;
