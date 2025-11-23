import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFavorites } from '../hooks/useFavorites';
import { EventCardData } from '../utils/types';
import { LocalizationContext } from '../contexts/LocalizationContext';
import CustomToolbar from '../components/CustomToolbar';
import BackIcon from '../assets/BackIcon';
import { goBack } from '../navigation';
import screens from '../utils/screens';
import ProfileHeader from '../components/ProfileHeader';
import EventCard from '../components/EventCard';

export default function ProfileScreen() {
  const { favorites } = useFavorites();
  const { strings } = useContext(LocalizationContext);
  const renderItem = ({
    item,
    index,
  }: {
    item: EventCardData;
    index: number;
  }) => {
    return <EventCard event={item} key={index} />;
  };
  const renderEmptyView = () => (
    <Text style={styles.emptyFavText}>{strings.noFavYet}</Text>
  );
  const renderHeaderComponent = () => {
    return (
      <>
        <ProfileHeader />
        <Text style={styles.titleText}>{strings.favourites}</Text>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <CustomToolbar
        title={screens.Profile}
        leftIcon={<BackIcon />}
        onPress={goBack}
      />

      <View style={styles.container}>
        <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ListEmptyComponent={renderEmptyView}
          ListHeaderComponent={renderHeaderComponent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  titleText: { fontSize: 20, fontWeight: '600', margin: 12, marginBottom: 0 },
  emptyFavText: { fontSize: 14, fontWeight: '400', margin: 12 },
});
