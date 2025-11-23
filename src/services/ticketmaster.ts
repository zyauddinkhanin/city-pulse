import { TICKETMASTER_API_KEY, BASE } from 'react-native-dotenv';
import { eventListFactory, MOCK } from '../utils/eventFactory';
import { EventCardData } from '../utils/types';

export const searchEvents = async (
  keyword = '',
  city = '',
): Promise<EventCardData[]> => {
  try {
    if (!TICKETMASTER_API_KEY) {
      return eventListFactory(MOCK.events);
    }
    const q = `apikey=${TICKETMASTER_API_KEY}&keyword=${encodeURIComponent(
      keyword,
    )}&city=${encodeURIComponent(city)}`;
    const url = `${BASE}/events.json?${q}`;
    const res = await fetch(url);
    const json = await res.json();
    const events = (json && json._embedded && json._embedded.events) || [];
    return eventListFactory(events);
  } catch (e) {
    console.warn('api calling error...', e);
    return eventListFactory(MOCK.events);
  }
};
