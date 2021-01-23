/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-23 21:52:35
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-23 22:10:42
 * @FilePath: /awesome-hooks/src/useFavicon.js
 */
import { useEffect } from 'react';

const useFavicon = (path, type = 'image/x-icon') => {
  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = type;
    link.href = path;
    document.querySelector('head').appendChild(link);
  }, [path, type]);
};

export default useFavicon;