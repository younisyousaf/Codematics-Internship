setInterval(() => {
    const randomWidth = Math.floor(Math.random() * 21 + 8);
    const randomPosition = Math.floor(Math.random() * screen.width);
    const randomSpeed = Math.floor(Math.random() * 5000 + 2000 );

    const span = document.createElement("span");
    span.style.width = `${randomWidth}px`;
    span.style.left = `${randomPosition}px`;
    span.style.animationDuration = `${randomSpeed}ms`;
    document.body.appendChild(span)

    
        span.addEventListener('mouseenter', () =>{
            span.style.animationPlayState = 'paused';
            span.style.backgroundColor = "#FF0062";
            span.style.border = 'none';
            
        });
        span.addEventListener('mouseleave',()=>{
            span.style.animationPlayState = 'running';
            span.style.backgroundColor = '#FFB8C5';
        })
   
    // console.log(randomWidth);
},150);
