/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-23 21:58:44
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-23 22:02:52
 * @FilePath: /awesome-hooks/src/useTitle.js
 */
import { useEffect } from "react";

const useTitle = title => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useTitle;