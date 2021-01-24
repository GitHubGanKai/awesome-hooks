/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-23 21:58:15
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-23 22:02:38
 * @FilePath: /awesome-hooks/src/useSwap.js
 */
const useSwap = obj => {
  let swapped = {};
  for (let key in obj) swapped[obj[key]] = key;
  return swapped;
};

export default useSwap;