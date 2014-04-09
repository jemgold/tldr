'use strict';

if (window.location.href.match(/\S+medium.com\/(?!@)/)) {
  console.log('medium!');
  var el = document.getElementsByClassName('metabar-text');
  if (el.length > 0) {
    var text = el[0].textContent;
    var time = parseInt(text.match(/\d+/)[0], 10);

    if (time > 10) {
      document.body.innerHTML = '<iframe width="640" height="360" src="//www.youtube.com/embed/e6Cw3rXu4Ds" frameborder="0" allowfullscreen></iframe>';
    }
  }
}
