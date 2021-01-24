/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-23 21:55:03
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-23 22:09:05
 * @FilePath: /awesome-hooks/src/useHover.js
 */

import { useEffect, useRef, useState } from "react";

const useHover = () => {
  const [value, setValue] = useState(false);
  const ref = useRef();

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, value];
};

export default useHover;