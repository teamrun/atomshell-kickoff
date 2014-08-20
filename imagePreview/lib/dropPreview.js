var fs = require('fs')

var config = null;

// svg partial surpport
var ablePreviewFormat = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
ablePreviewFormat = ablePreviewFormat.map(function(f){
    return f = 'image/'+f;
});


var _view = {
    init: function(){

    },
    setCtnDefaultState: function(){
        config.ele.addClass('noimg');
    },
    /*
     * 
     * 
     * 
     * 
     */
    updateDropStatus: function(code){
        var r='', a='';
        switch(code){
            case 0:
                r = 'dropable';
                a = 'noimg';
                break;
            case 1:
                r = 'noimg';
                a = 'dropable';
                break;
        }
        config.ele.removeClass(r).addClass(a);
    }
};


var _data = {

};

var imageArr;

var _event = {
    bind: function(){
        _event.bindDrop(config.ele);
    },
    bindDrop: function(target){
        var events = ['dragenter', 'dragover', 'dragleave', 'dragend', 'drop'];
        events.forEach(function(eName, i, arr){
            target.on(eName, _event.dndHandler);
        });
    },
    dndHandler: function(e){
        switch(e.type){
            case 'dragenter':
                // detect file type and change state
                imageArr = _event.detectDragImage(e);
                if( imageArr.length > 0 ){
                    _view.updateDropStatus(1);
                }
                else{
                    _view.updateDropStatus(0);
                }
                break;
            case 'dragover':
                e.preventDefault();
                break;
            case 'dragleave':
                _view.updateDropStatus(0);
                // change state
                break;
            case 'dragend':
                break;
            case 'drop':
                break;
        }
        // console.log(e.type);

        return false;
    },
    detectDragImage: function(e){
        var files = e.originalEvent.dataTransfer.files;
        var fileArr = [];
        for(var i=0, j=files.length; i<j; i++ ){
            var f = files[i];
            // console.log(f);
            if( ablePreviewFormat.indexOf(f.type) >=0 ){
                fileArr.push(f);
            }
        }
        return fileArr;
    }
};


function init(_config){
    console.log(config);
    if( !_config ){
        alert('config is required!! ');
    }
    else{
        config = _config;
        
        _view.init();
        _event.bind();
    }
    
};


module.exports = {
    init: init
};