import * as React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import SVGManager from "../SVGManager";
import styles from './styles';
import { useState } from "react";

const Mock = {
  pictureUrl:
    'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
  title: 'Fear of the water',
  description: 'Danties & Alina',
};

function ListPlayer({ navigation }) {
  const [isPlayed, setIsPlayed] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.trackInformationWrapper}>
        <Image style={styles.trackImage} source={{ uri: Mock.pictureUrl }} />
        <View>
          <Text style={styles.trackTitle}>{Mock.title}</Text>
          <Text style={styles.trackDescription}>{Mock.description}</Text>
        </View>
        <View style={styles.trackButtonsWrapper}>
          <TouchableOpacity
            style={styles.trackButtonWrapper}
            onPress={() => setIsPlayed(!isPlayed)}
          >
            {SVGManager.getIconFactory(
              isPlayed ? SVGManager.MANIFEST.PLAY : SVGManager.MANIFEST.PAUSE
            )()}
          </TouchableOpacity>
          <TouchableOpacity style={styles.trackButtonWrapper}>
            {SVGManager.getIconFactory(SVGManager.MANIFEST.NEXT)()}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.trackInformationWrapper}>
        <Text style={styles.trackTimeText}>00:00</Text>
        <View style={styles.fullTrackLine}>
          <View style={styles.fillTrackLine}></View>
        </View>
        <Text style={styles.trackTimeText}>03:59</Text>
      </View>
    </View>
  );
}

export default ListPlayer;
