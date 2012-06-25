(function ($) {
    // Monkey patch jQuery 1.3.1+ to add support for setting or animating CSS
    // scale and rotation independently.
    // 2009-2010 Zachary Johnson www.zachstronaut.com
    // Updated 2010.11.06
    var rotateUnits = 'deg';
    
    $.fn.rotate = function (val)
    {
        var style = $(this).css('transform') || 'none';
        
        if (typeof val == 'undefined')
        {
            if (style)
            {
                var m = style.match(/rotate\(([^)]+)\)/);
                if (m && m[1])
                {
                    return m[1];
                }
            }
            
            return 0;
        }
        
        var m = val.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/);
        if (m)
        {
            if (m[3])
            {
                rotateUnits = m[3];
            }
            
            $(this).css(
                'transform',
                style.replace(/none|rotate\([^)]*\)/, '') + 'rotate(' + m[1] + rotateUnits + ')'
            );
        }
        
        return this;
    }
    
    // Note that scale is unitless.
    $.fn.scale = function (val, duration, options)
    {
        var style = $(this).css('transform');
        
        if (typeof val == 'undefined')
        {
            if (style)
            {
                var m = style.match(/scale\(([^)]+)\)/);
                if (m && m[1])
                {
                    return m[1];
                }
            }
            
            return 1;
        }
        
        $(this).css(
            'transform',
            style.replace(/none|scale\([^)]*\)/, '') + 'scale(' + val + ')'
        );
        
        return this;
    }

    // fx.cur() must be monkey patched because otherwise it would always
    // return 0 for current rotate and scale values
    var curProxied = $.fx.prototype.cur;
    $.fx.prototype.cur = function ()
    {
        if (this.prop == 'rotate')
        {
            return parseFloat($(this.elem).rotate());
        }
        else if (this.prop == 'scale')
        {
            return parseFloat($(this.elem).scale());
        }
        
        return curProxied.apply(this, arguments);
    }
    
    $.fx.step.rotate = function (fx)
    {
        $(fx.elem).rotate(fx.now + rotateUnits);
    }
    
    $.fx.step.scale = function (fx)
    {
        $(fx.elem).scale(fx.now);
    }
    
    /*
Starting on line 3905 of jquery-1.3.2.js we have this code:
// We need to compute starting value
if ( unit != "px" ) {
self.style[ name ] = (end || 1) + unit;
start = ((end || 1) / e.cur(true)) * start;
self.style[ name ] = start + unit;
}
This creates a problem where we cannot give units to our custom animation
because if we do then this code will execute and because self.style[name]
does not exist where name is our custom animation's name then e.cur(true)
will likely return zero and create a divide by zero bug which will set
start to NaN.
The following monkey patch for animate() gets around this by storing the
units used in the rotation definition and then stripping the units off.
*/
    
    var animateProxied = $.fn.animate;
    $.fn.animate = function (prop)
    {
        if (typeof prop['rotate'] != 'undefined')
        {
            var m = prop['rotate'].toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);
            if (m && m[5])
            {
                rotateUnits = m[5];
            }
            
            prop['rotate'] = m[1];
        }
        
        return animateProxied.apply(this, arguments);
    }
})(jQuery);

$(function(){
	$('ul#icons li').hover(
		function() {
			$(this).addClass('ui-state-hover');
		},
		function() {
			$(this).removeClass('ui-state-hover');
		}
		);
	$('button').button();
	var edit=CodeMirror.fromTextArea($('#code')[0], {
		lineNumbers: true,
		theme:'ambiance',
		//mode: 'text/x-c++src',
		mode: 'text/javascript',
		matchBrackets: true,
		tabSize: 4,
		indentUnit: 4,
		indentWithTabs: true
	});
	var pi, pj;
	var maxi, maxj;
	var mtr;
	var dir;
	var rob;
	function set_mp(x,y,mps){
		var tm=30+1;
		var mp=$('<div>',{
			style: 'width: '+(x*tm+1)+'px; height: '+(y*tm+1)+'px; ' +
			'left: 50%; top: 50%; '+
			'margin-left: -'+((x*tm+1)/2)+'px; margin-top: -'+((y*tm+1)/2)+'px; '+
			'background: gray; position: absolute'
		});
		$('#right').html('').append(mp);
		mtr=new Array(y);
		maxi=y, maxj=x;
		for(var i=0; i<y; i++){
			mtr[i]=new Array(x);
			for(var j=0; j<x; j++){
				var cl;
				//console.log(mps[i]);
				if(mps[i*x+j]=='#') cl='pared';//#B43104';
				else if(mps[i*x+j]=='K') pi=i, pj=j;
				else if(mps[i*x+j]=='.' || mps[i*x+j]=='D') cl='piso';
				//else if(mps[i]=='D') 
				var bl=$('<div>',{
					id:i+':'+j,
					style: 'margin-top:1px; margin-left:1px; width:'+(tm-1)+'px;'+
					' height:'+(tm-1)+'px; float:left;',
					'class':cl
				});
				if(mps[i*x+j]=='D') bl.removeClass('piso').addClass('diamante');
				mtr[i][j]=mps[i*x+j];
				mp.append(bl);
			}
		}
		rob=$('<div>',{
			'id':'krob',
			'class':'rob'
		}).append($('<img src="resources/css/karel.png"/>')).css('left',pj*tm).css('top',pi*tm).appendTo(mp);
	}
	set_mp(21,13,
		'#####################'+
		'#...................#'+
		'#...................#'+
		'#...................#'+
		'#...................#'+
		'#...................#'+
		'#...................#'+
		'#...................#'+
		'#...................#'+
		'#...................#'+
		'#.........###########'+
		'#......KD.###########'+
		'#####################');
	dir=0;
	var ddi=[[-1,0,1,0],[0,-1,0,1]];
	function avanzar(){
		var dc, ind;
		if(dir==0 || dir==2) ind=0;
		else ind=1;
		console.log((pi+ddi[0][dir])+':'+(pj+ddi[1][dir]));
		console.log(mtr[(pi+ddi[0][dir])][(pj+ddi[1][dir])]);
		if(mtr[pi+ddi[0][dir]][pj+ddi[1][dir]]=='#'){
			alert('he chocado!!!');
			return false;
		}
		pi+=ddi[0][dir];
		pj+=ddi[1][dir];
		//console.log(pi+':'+pj);
		if(ind==0)
			rob.animate({'top':'+='+(ddi[ind][dir]*31)+'px'},'fast','linear');
		else
			rob.animate({'left':'+='+(ddi[ind][dir]*31)+'px'},'fast','linear');
	}
	function izquierda(){
		dir=(dir+1)%4;
		rob.animate({rotate:'-=90deg'},'fast','linear');
	}
	$('#ejecutar').click(function(){
		edit.save();
		eval($('#code').val());
		acciones();
	});
});
