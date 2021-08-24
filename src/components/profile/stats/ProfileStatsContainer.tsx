import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, StyleSheet} from 'react-native';
import {batch, useDispatch, useSelector} from 'react-redux';
import {
  getFavorite,
  getWatched,
  getWatchlist,
} from 'src/redux/collections/CollectionsActions';
import {collectionsSelector} from 'src/redux/collections/CollectionsSlice';
import palette from 'src/styles/palette';
import StatsBox from './StatsBox';

const ProfileStatsContainer: React.FC = () => {
  const {t} = useTranslation('movies');
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      batch(() => {
        dispatch(getWatchlist());
        dispatch(getWatched());
        dispatch(getFavorite());
      });
    }, [dispatch]),
  );

  const {watchlist, favorite, watched} = useSelector(collectionsSelector);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.titleText}>{t('stats')}</Text>
      <View style={styles.statsContainer}>
        <StatsBox
          value={watchlist.movies.length}
          label={t('watchlist')}
          icon={'tv'}
        />
        <StatsBox
          value={favorite.movies.length}
          label={t('favorite')}
          icon={'heart'}
        />
        <StatsBox
          value={watched.movies.length}
          label={t('watched')}
          icon={'checkmark'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: palette.strongBlack,
    marginVertical: 10,
    borderColor: palette.primary,
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: palette.white,
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    color: palette.primary,
  },
});

export default ProfileStatsContainer;