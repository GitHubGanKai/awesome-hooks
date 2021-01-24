/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-24 12:54:33
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-24 12:54:53
 * @FilePath: /awesome-hooks/src/useFiler/useFiler.js
 */
import shortid from 'shortid'
import {useLocalStorage} from './main'

const useFiler = key => {
  const [files, setFiles] = useLocalStorage(key, {})

  const add = (data, id) => {
    const newKey = id || shortid.generate()
    const now = Date.now()
    setFiles(files => ({
      ...files,
      [newKey]: {
        id: newKey,
        created: now,
        modified: now,
        data
      }
    }))
    return newKey
  }

  const remove = id => {
    setFiles(({[id]: deleted, ...newFiles}) => newFiles)
  }

  const update = (id, data) => {
    setFiles(files => ({
      ...files,
      [id]: {
        ...files[id],
        modified: Date.now(),
        data: typeof data === 'function' ? data(files[id]) : data
      }
    }))
  }

  const clear = () => {
    setFiles({})
  }

  return [files, {add, remove, update, clear}]
}

export default useFiler