import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import ListPlayer from "../../components/ListPlayer";

function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.bottomPlayerWrapper}>
        <ListPlayer />
      </View>
    </View>
  );
}

export default ListScreen;
