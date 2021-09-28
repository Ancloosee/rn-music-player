import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import palette from "../../../constants/palette";

const Pause = ({ width = 25, height = 25, fill = palette.white }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 357 357">
      <Path
        fill={fill}
        d="m158 0h71c4.417969 0 8 3.582031 8 8v311c0 4.417969-3.582031 8-8 8h-71c-4.417969 0-8-3.582031-8-8v-311c0-4.417969 3.582031-8 8-8zm0 0"
      />
      <Path
        fill={fill}
        d="m8 0h71c4.417969 0 8 3.582031 8 8v311c0 4.417969-3.582031 8-8 8h-71c-4.417969 0-8-3.582031-8-8v-311c0-4.417969 3.582031-8 8-8zm0 0"
      />
    </Svg>
  );
};

export default Pause;
