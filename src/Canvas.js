import React from 'react'
import useCanvas from './useCanvas'

const Canvas = props => {
    const { draw, options, ...rest } = props
    // eslint-disable-next-line no-unused-vars
    const { context, ...moreConfig } = options
    const canvasRef = useCanvas(draw, {context})

    return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas