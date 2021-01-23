/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-23 21:54:22
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-23 22:10:18
 * @FilePath: /awesome-hooks/src/useFullScreen.js
 */

import { useState, useRef } from "react";

const useFullScreen = () => {
  const [isFS, setIsFS] = useState(false);
  const elementFS = useRef();

  const triggerFS = () => {
    const el = elementFS.current;

    if (el) {
      el.requestFullscreen && el.requestFullscreen();
      el.mozRequestFullScreen && el.mozRequestFullScreen();
      el.webkitRequestFullscreen && el.webkitRequestFullscreen();
      el.msRequestFullscreen && el.msRequestFullscreen();
    }

    setIsFS(true);
  };

  const exitFS = () => {
    const elFS = elementFS.current.ownerDocument.fullscreen;

    if (isFS && elFS) {
      document.exitFullscreen();
      document.exitFullscreen && document.exitFullscreen();
      document.mozCancelFullScreen && document.mozCancelFullScreen();
      document.webkitExitFullscreen && document.webkitExitFullscreen();
      document.msExitFullscreen && document.msExitFullscreen();
    }

    setIsFS(false);
  };

  return { elementFS, triggerFS, exitFS, isFS };
};

export default useFullScreen;