import React from 'react'
import { Shimmer, ShimmerWrapper } from './skeletonLoader.styles'

const SkeletonLoader = ({children}) => {
  return (
    <div>
      {children}
      <ShimmerWrapper>
        <Shimmer />
      </ShimmerWrapper>
    </div>
  )
}

export default SkeletonLoader