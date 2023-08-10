import React from 'react'
import useCanvas from './useCanvas'

const Canvas = props => {

    const { draw, ...rest } = props
    // eslint-disable-next-line no-restricted-globals
    const canvasRef = useCanvas(draw)

    return <canvas ref={canvasRef} {...rest}/>
}


export default Canvas