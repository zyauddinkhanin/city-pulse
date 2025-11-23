import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { LocalizationContext } from '../contexts/LocalizationContext';
import { searchEvents } from '../services/ticketmaster';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import { navigate } from '../navigation';
import screens from '../utils/screens';
import { EventCardData, Language } from '../utils/types';
import CustomToolbar from '../components/CustomToolbar';
import FullScreenLoader from '../components/CustomLoader';
import ProfileIcon from '../assets/ProfileIcon';

export default function HomeScreen() {
  const { strings, lang, setLang } = useContext(LocalizationContext);
  const [events, setEvents] = useState<EventCardData[]>([]);
  const [loading, setLoading] = useState(false);

  const doSearch = async (keyword = '', city = '') => {
    setLoading(true);
    const list = await searchEvents(keyword, city);
    setEvents(list);
    setLoading(false);
  };

  useEffect(() => {
    doSearch();
  }, []);

  const renderEmptyView = () => {
    return <Text style={styles.emptyText}>{strings.noEvents}</Text>;
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: EventCardData;
    index: number;
  }) => {
    return <EventCard event={item} key={index} />;
  };

  return (
    <View style={styles.outerContainer}>
      <CustomToolbar
        title={screens.Home}
        leftIcon={
          <View style={styles.langView}>
            <Text style={styles.langText}>
              {`${strings.convert}`}
              {' : '}
              {lang === 'en' ? Language.AR : Language.EN}
            </Text>
          </View>
        }
        onPress={() => setLang(lang === 'en' ? 'ar' : 'en')}
        leftIconStyle={styles.langView}
        rightIcon={
          <View style={styles.profileView}>
            <Text style={styles.langText}>{strings.profile}</Text>
            <ProfileIcon />
          </View>
        }
        onPressRight={() => navigate(screens.Profile)}
        rightIconStyle={styles.profileView}
      />
      <View style={styles.headerView}>
        <Text style={styles.titleText}>{strings.homeTitle}</Text>
        <SearchBar
          onSearch={doSearch}
          placeholder={strings.searchPlaceholder}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={events}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ListEmptyComponent={renderEmptyView}
        />
      </View>
      <FullScreenLoader visible={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  headerView: {
    paddingHorizontal: 12,
  },
  container: { flex: 1 },
  titleText: { fontSize: 20, fontWeight: '600', marginTop: 10 },
  emptyText: { marginTop: 24 },
  langButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    width: '32%',
    height: 40,
    backgroundColor: 'rgba(176, 129, 234, 1)',
  },
  langView: {
    height: 30,
    width: 120,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  langText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  profileView: {
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 8,
  },
});
