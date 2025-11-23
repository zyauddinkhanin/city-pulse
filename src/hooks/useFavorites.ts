import { useEffect, useState } from 'react';
import { getItem, setItem } from '../utils/storage';
import { EventCardData } from '../utils/types';

const FAVORITES_KEY = 'citypulse:favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<EventCardData[]>([]);

  useEffect(() => {
    (async () => {
      const f = await getItem(FAVORITES_KEY);
      if (f) setFavorites(f);
    })();
  }, []);

  const addFavorite = async (event: EventCardData) => {
    const exists = favorites.find(e => e.id === event.id);
    if (exists) return;
    const next = [event, ...favorites];
    setFavorites(next);
    await setItem(FAVORITES_KEY, next);
  };

  const removeFavorite = async (id: string) => {
    const next = favorites.filter(e => e.id !== id);
    setFavorites(next);
    await setItem(FAVORITES_KEY, next);
  };

  const isFavorited = (id: string) => favorites.some(e => e.id === id);

  return { favorites, addFavorite, removeFavorite, isFavorited };
};
