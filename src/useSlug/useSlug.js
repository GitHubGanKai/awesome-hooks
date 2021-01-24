/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-23 21:57:26
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-23 22:10:57
 * @FilePath: /awesome-hooks/src/useSlug.js
 */
const useSlug = string => {
  const from = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;";
  const to = "aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------";
  const regex = new RegExp(from.split("").join("|"), "g");

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(regex, character => to.charAt(from.indexOf(character)))
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export default useSlug;