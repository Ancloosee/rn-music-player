import React from 'react';
import { StyleSheet } from "react-native";
import palette from "../../constants/palette";

export default StyleSheet.create({
  container: {
    backgroundColor: palette.lightGrey,
    height: 120,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  trackInformationWrapper: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  trackTitle: {
    color: palette.white,
    fontSize: 25,
  },
  trackDescription: {
    color: palette.white,
  },
  trackImage: {
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  trackButtonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  trackButtonWrapper: {
    marginHorizontal: 5,
  },
  trackTimeText: {
    color: palette.white,
  },
  fullTrackLine: {
    position: 'relative',
    backgroundColor: palette.black,
    width: '75%',
    height: 5,
    borderRadius: 50,
  },

  fillTrackLine: {
    position: 'absolute',
    backgroundColor: palette.violet,
    left: 0,
    right: '50%',
    top: 0,
    bottom: 0,
  },
});
