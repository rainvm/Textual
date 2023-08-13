import React from 'react'
import Canvas from './Canvas'
import './App.css'

function App() {
    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.fill()
    }
    return <Canvas id="MyCanvas" draw={draw} options={'2d'}/>
}

export default App