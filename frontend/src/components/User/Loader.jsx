import React from 'react'
import Lottie from 'lottie-react';
import LoaderAnimation from '../../LoaderAnimation.json'

const Loader = ({isLoading}) => {

  return (
      <Lottie className='h-[631px] ' animationData={LoaderAnimation}  loop={isLoading} />
  )
}

export default Loader
