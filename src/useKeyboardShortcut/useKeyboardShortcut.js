/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-24 12:55:25
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-24 12:55:40
 * @FilePath: /awesome-hooks/src/useKeyboardShortcut/useKeyboardShortcut.js
 */
import React from 'react'

export default ({keyCode, action, disabled}) => {
  React.useEffect(() => {
    if(!disabled){
      enable()
    }
    return () => {
      disable()
    }
  })

  const enable = () => {
    document.addEventListener('keydown', handleAction)
  }

  const disable = () => {
    document.removeEventListener('keydown', handleAction)
  }

  const handleAction = e => {
    if(e.keyCode === keyCode){
      e.preventDefault()
      action(e)
    }
  }

  return {enable, disable}
}