import React from 'react'
import './BounceLoading.css'
import rotateIcon from './img/bounce.svg'

export const BounceLoading = () => {
  return <img alt="loading..." src={rotateIcon} className="loading-round" />
}
