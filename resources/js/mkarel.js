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
});
