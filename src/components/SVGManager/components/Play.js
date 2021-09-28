import React from 'react';
import Svg, { Polygon, G } from 'react-native-svg';
import palette from "../../../constants/palette";

const Play = ({ width = 25, height = 25, fill = palette.white }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 357 357">
      <G>
        <G id="play-arrow">
          <Polygon fill={fill} points="38.25,0 38.25,357 318.75,178.5 		" />
        </G>
      </G>
    </Svg>
  );
};

export default Play;
