import React from 'react';
import {ListRenderItem, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import palette from 'src/styles/palette';
import {Movie} from 'src/models';
import ErrorWrapper from './ErrorWrapper';
import MovieBox from './MovieBox';
import SectionHeader from './SectionHeader';

interface Props {
  title: string;
  data: Movie[];
  error?: string;
  loading: boolean;
  isExplore?: boolean;
}

const CollectionContentBox: React.FC<Props> = ({
  title,
  data,
  error,
  isExplore,
}) => {
  const renderItem: ListRenderItem<Movie> = ({item}) => (
    <MovieBox movie={item} />
  );
  if (error) {
    return <ErrorWrapper error={error} loading={false} />;
  }
  if (!data.length) {
    return null;
  }
  return (
    <View style={styles.discoveryContentBox}>
      <SectionHeader text={title} size={20} color={palette.white} />
      <FlatList
        scrollEnabled={isExplore ? false : true}
        data={data}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        maxToRenderPerBatch={5}
        initialNumToRender={10}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  discoveryContentBox: {
    marginTop: 20,
  },
});

export default CollectionContentBox;
