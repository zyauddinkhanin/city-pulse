import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { EventCardData } from '../utils/types';
import { navigate } from '../navigation';
import screens from '../utils/screens';

const EventCard = ({ event }: { event: EventCardData }) => {
  return (
    <Pressable onPress={() => navigate(screens.Details, { event: event })}>
      <View style={styles.card} key={event.id}>
        {event.image ? (
          <Image source={{ uri: event.image }} style={styles.image} />
        ) : null}
        <View style={styles.body}>
          <Text style={styles.title}>{event.name}</Text>
          <Text style={styles.sub}>
            {event.venue} • {event.city}
          </Text>
          <Text style={styles.date}>{event.date}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#100212E5',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 12,
  },
  image: {
    width: '30%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  body: { padding: 8, flex: 1 },
  title: { fontWeight: '600' },
  sub: { color: '#666', marginTop: 4 },
  date: { marginTop: 6, color: '#333' },
});

export default EventCard;
