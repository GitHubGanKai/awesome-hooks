/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-23 21:56:57
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-23 22:10:53
 * @FilePath: /awesome-hooks/src/usePassiveEventListener.js
 */
import useEventListener from './useEventListener'

const usePassiveEventListener = props => {
  const { eventName, handler, element = global, options = {} } = props

  Object.assign(options, { passive: true })

  useEventListener(eventName, handler, element, options)
}

export default usePassiveEventListener;