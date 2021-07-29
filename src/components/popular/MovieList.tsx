import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, FlatList, Text, ListRenderItem} from 'react-native';
import colors from '../../assets/theme/colors';
import {Genres, Movie} from '../../models';
import MovieItem, {MOVIE_HEIGHT} from './MovieItem';

interface MovieListProps {
  moviesList: Movie[];
  genres: Genres[];
}

const MovieList = ({moviesList, genres}: MovieListProps) => {
  const {t} = useTranslation();
  const renderItem: ListRenderItem<Movie> = ({item}) => {
    const mergeGenresWithMovies = item.genre_ids.map(movie =>
      genres.find(genre => genre.id === movie),
    );

    return (
      <MovieItem movie={item} mergeGenresWithMovies={mergeGenresWithMovies} />
    );
  };

  const keyExtractor = (item: Movie) => item.id.toString();

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>{t('movies:popular')}</Text>
      </View>
      <FlatList<Movie>
        data={moviesList}
        renderItem={renderItem}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={MOVIE_HEIGHT}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        initialNumToRender={7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  heading: {
    alignSelf: 'center',
    top: 40,
    position: 'absolute',
    zIndex: 10,
  },
  headingText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default MovieList;