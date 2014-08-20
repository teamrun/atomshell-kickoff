document.body.innerHTML += '<p>重写一遍html就会重新渲染一遍</p>';
// $('.noimg-yet').on('click', function(){
//     $(document.body).attr('class', 'dropable');
// })

// test
var gg = 'outside file can not visit'
window.ggg = 'define global varible like this: window.ggg'
// endof test


var doc = $(document.body);

var dropPreview = require('./dropPreview.js');

dropPreview.init({ele: $('.drop-ctn')})