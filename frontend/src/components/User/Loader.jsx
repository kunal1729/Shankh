import React from 'react'
import Lottie from 'lottie-react';
import LoaderAnimation from '../../LoaderAnimation.json'

const Loader = ({setStatus, setIsLoading}) => {


  const handleComplete = () => {
    setIsLoading(false);
    setStatus("results")
  }

  return (
      <Lottie className='h-[931px] ' animationData={LoaderAnimation} onComplete={handleComplete} loop={false} />
  )
}

export default Loader
