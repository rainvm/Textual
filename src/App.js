import React from 'react'
import Canvas from './Canvas'

function App() {

    const draw = (ctx, frameCount) => {
        resizeCanvasToDisplaySize(ctx.canvas)
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.fill()
    }

    return <Canvas draw={draw} />
}

function resizeCanvasToDisplaySize(canvas) {

    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        return true // here you can return some usefull information like delta width and delta height instead of just true
        // this information can be used in the next redraw...
    }

    return false
}

export default App