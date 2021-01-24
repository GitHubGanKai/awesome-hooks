/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-23 21:59:16
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-23 22:11:05
 * @FilePath: /awesome-hooks/src/useToggle.js
 */
import { useState, useCallback } from "react";

export const useToggle = initial => {
  const [open, setOpen] = useState(initial);
  return [open, useCallback(() => setOpen(status => !status))];
};