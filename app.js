const controller = new ScrollMagic.Controller();

const tween = new TimelineMax()
  .add(
    TweenMax.to(document.querySelector('.white-part'), {
      webkitClipPath: 'inset(0px 0px 0px)'
    })
  )
  .add(
    TweenMax.to(document.querySelector('.red-part'), {
      webkitClipPath: 'inset(0px 0px 0px)'
    })
  );

const scene = new ScrollMagic.Scene({
  triggerElement: '.showcase',
  duration: 1000,
  triggerHook: 'onLeave'
})
  .setPin('.showcase')
  .setTween(tween)
  .addTo(controller);
