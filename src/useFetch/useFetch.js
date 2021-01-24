/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-23 21:53:34
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-23 22:02:02
 * @FilePath: /awesome-hooks/src/useFetch.js
 */
import { useState, useEffect } from "react";

const useFetch = url => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();

  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setResponse(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchInfo();
  }, [url]);

  return { error, loading, response };
};

export default useFetch;