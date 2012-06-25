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
				mtr[i][j]=mps[i];
				mp.append(bl);
			}
		}
		rob=$('<div>',{
			'class':'rob'
		}).css('left',pj*tm).css('top',pi*tm).appendTo(mp);
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
});
