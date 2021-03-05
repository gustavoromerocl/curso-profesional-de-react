import React, { useEffect } from 'react'

const Surprise = () => {
  
  useEffect(() => {
    import('./hello').then(mod => mod.default());
  }, [])

  return (
    <div>
      <p>Sorpresa</p>
    </div>
  )
}

export default Surprise
