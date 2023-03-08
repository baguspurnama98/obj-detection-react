export const drawRect = (detections, ctx) =>{
    detections.forEach(prediction=>{

        // get predictions result
        const [x,y,width,height] = prediction['bbox']
        const text = prediction['class']

        //set styling
        const color = "green"
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color

        // Draw retangles and text
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    })
}