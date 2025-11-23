import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useFavorites } from '../hooks/useFavorites';
import { useRoute } from '@react-navigation/native';
import { EventCardData } from '../utils/types';
import { LocalizationContext } from '../contexts/LocalizationContext';
import CustomToolbar from '../components/CustomToolbar';
import BackIcon from '../assets/BackIcon';
import { goBack } from '../navigation';
import screens from '../utils/screens';
import CustomButton from '../components/CustomButton';

export default function EventDetailsScreen() {
  const route = useRoute();
  const { event } = route.params as {
    event: EventCardData;
  };
  const { addFavorite, removeFavorite, isFavorited } = useFavorites();
  const favorited = isFavorited(event.id);
  const { strings } = useContext(LocalizationContext);
  return (
    <View style={styles.mainContainer}>
      <CustomToolbar
        title={screens.Details}
        leftIcon={<BackIcon />}
        onPress={goBack}
      />
      <ScrollView contentContainerStyle={styles.container}>
        {event.image ? (
          <Image source={{ uri: event.image }} style={styles.imageView} />
        ) : null}
        <Text style={styles.eventName}>{event.name}</Text>
        <Text style={styles.eventDate}>{event.date}</Text>
        <Text style={styles.eventDate}>
          {event.venue} — {event.city}
        </Text>

        <View style={styles.buttonView}>
          <CustomButton
            title={favorited ? strings.removeFav : strings.addFav}
            onPress={() =>
              favorited ? removeFavorite(event.id) : addFavorite(event)
            }
            style={[
              styles.button,
              favorited ? styles.selectedButton : styles.unselectedButton,
            ]}
          />
        </View>
        <View style={styles.infoView}>
          <Text style={styles.aboutTitle}>{strings.about}</Text>
          <Text style={styles.infoText}>{event.info || strings.noInfo}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: { padding: 16, flexGrow: 1 },
  imageView: { width: '100%', height: 200, borderRadius: 8 },
  eventName: { fontSize: 20, fontWeight: '700', marginTop: 12 },
  eventDate: { marginTop: 8 },
  buttonView: { marginTop: 16 },
  infoView: { marginTop: 20 },
  aboutTitle: { fontWeight: '600' },
  infoText: { marginTop: 6 },
  button: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(176, 129, 234, 1)',
  },
  selectedButton: { backgroundColor: '#fc0356' },
  unselectedButton: { backgroundColor: 'rgba(176, 129, 234, 1)' },
});
