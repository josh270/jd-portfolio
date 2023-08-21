
  document.addEventListener('DOMContentLoaded', function() {
    const lightning = new TimelineMax({
      paused: true
    });
    lightning.add(startLightning());
    
    function startLightning() {
        const tl = new TimelineMax()
    const bg = document.querySelector('.bg')
      const streak = document.querySelectorAll('.lightning-streak')
    const pathLength = document.querySelector('.lightning-streak__path').getTotalLength()
  
    tl.set(streak, {
      opacity: 1,
          strokeWidth: 0.7,
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    })
    tl.staggerTo(streak, 0.35, {
      strokeDashoffset: 0,
      stroke: 'white',
      filter: 'drop-shadow( -1px -1px 1px #f9f175 )',
          ease: Linear.easeIn
      }, -0.1)
    tl.staggerTo(streak, 0.4, {
      opacity: 0,
          ease: Bounce.easeOut
      }, -0.02)
    tl.to(streak, 0.1, {
      opacity: 1,
      strokeWidth: '2px',
      filter: 'drop-shadow( -1px -1px 4px #6304c9 )',
          ease: Linear.easeOut
      })
    tl.to(streak, 0.2, {
      strokeWidth: '0.5px',
      filter: 'drop-shadow( -1px -1px 4px #4e2db7 )',
          ease: Linear.easeOut
      })
    tl.staggerTo(streak, 0.1, {
      opacity: 0,
          ease: Linear.easeOut
      }, -0.1)
  
      return tl
    }
    
    function replay() {
      lightning.restart();
    }
    

    replay();
  });
  