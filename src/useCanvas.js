import { useRef, useEffect } from 'react'

const useCanvas = (draw, options={}) => {

    const canvasRef = useRef(null)
    function resizeCanvas(canvas) {
        const { width, height } = canvas.getBoundingClientRect()

        if (canvas.width !== width || canvas.height !== height) {
            const { devicePixelRatio:ratio =1} = window
            const context = canvas.getContext('2d')
            canvas.width = width*ratio
            canvas.height = height*ratio
            context.scale(ratio, ratio)
            return true
        }

        return false
    }

    useEffect(() => {

        const _predraw = (ctx) => {
            resizeCanvas(ctx.canvas)
            ctx.save()
            const { width, height } = ctx.canvas
            ctx.clearRect(0, 0, width, height)
        }
        const _postdraw = () => {
            return 0
        }

        const canvas = canvasRef.current
        const context = canvas.getContext(options.context || '2d')
        let frameCount = 0
        let animationFrameId
        const render = () => {
            frameCount++
            _predraw(context)
            draw(context, frameCount)
            _postdraw()
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw, options.context])
    return canvasRef
}
export default useCanvas