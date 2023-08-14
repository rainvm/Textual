import React from 'react'
import Canvas from './Canvas'
import './App.css'

// eslint-disable-next-line no-unused-vars
function Pulse() {
    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        let [x, y] = pos(ctx.canvas.width, ctx.canvas.height)
        ctx.arc(x, y, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.fill()
    }

    function pos(x, y){
        const { devicePixelRatio:ratio =1} = window
        return [x/2/ratio, y/2/ratio]
    }

    return <div id="pulse"><Canvas draw={draw} options={'2d'}/></div>
}
function Sidebar() {
    return <div id="sidebar"></div>
}

function App() {
    return [<Sidebar/>]
}

export default App