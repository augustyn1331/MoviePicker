import React from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {movieSelector} from 'src/redux/movie/MovieSlice';
import {CollectionContentBox, Container} from '../common';
import ProfileHeader from './ProfileHeader';

const ProfileComponent: React.FC = () => {
  const {movies} = useSelector(movieSelector);
  const {t} = useTranslation('movies');
  return (
    <Container>
      <ProfileHeader />
      <Container withPadding disableScroll disableSafeArea>
        {/* u can generate it from some kind of config const */}
        <CollectionContentBox
          title={t('liked')}
          data={movies}
          loading={false}
        />
        <CollectionContentBox
          title={t('watched')}
          data={movies}
          loading={false}
        />
        <CollectionContentBox
          title={t('toWatch')}
          data={movies}
          loading={false}
        />
      </Container>
    </Container>
  );
};

export default ProfileComponent;
