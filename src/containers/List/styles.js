import React from 'react';
import { StyleSheet } from "react-native";
import palette from "../../constants/palette";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: palette.mainBackground,
    height: '100%',
  },
  bottomPlayerWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
});
