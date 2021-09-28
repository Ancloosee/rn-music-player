import React from 'react';

import Play from "./components/Play";
import Pause from "./components/Pause";
import Next from "./components/Next";

const PlayIcon = (props) => <Play {...props} />;
const PauseIcon = (props) => <Pause {...props} />;
const NextIcon = (props) => <Next {...props} />;

export default class SVGManager {
  static MANIFEST = {
    PLAY: "PLAY",
    PAUSE: "PAUSE",
    NEXT: "NEXT",
  };

  static ICONS = {
    PLAY: PlayIcon,
    PAUSE: PauseIcon,
    NEXT: NextIcon,
  };

  static getIconFactory(type) {
    console.log('type', type);
    if (!SVGManager.ICONS[type]) {
      console.log('There is no icon: ', type);
    }
    return SVGManager.ICONS[type] || null;
  }
}
