import * as React from 'react';
import { Appbar } from 'react-native-paper';

const AppHeader = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  const dark = true; // Set the dark value
  const statusBarHeight = 24; // Set the statusBarHeight value

  return (
    <Appbar.Header dark={dark} statusBarHeight={statusBarHeight}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default AppHeader;