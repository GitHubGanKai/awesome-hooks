/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-24 12:56:35
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-24 12:56:59
 * @FilePath: /awesome-hooks/src/useOnClickOutside/useOnClickOutside.js
 */
import React from 'react'

export default (onClickOutside, disabled) => {
  const ref = React.useRef()

  React.useEffect(() => {
    if(!disabled){
      window.addEventListener('click', checkForClickOutside)
      return () => {
        window.removeEventListener('click', checkForClickOutside)
      }
    }else{
      window.removeEventListener('click', checkForClickOutside)
    }
  }, [disabled])

  const checkForClickOutside = e => {
    if(ref.current){
      if(!ref.current.contains(e.target)){
        onClickOutside()
      }
    }
  }
  return ref;
}