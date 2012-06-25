<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Editor</title>
		<link rel="stylesheet" href="resources/css/codemirror.css"/>
		<link rel="stylesheet" href="resources/css/ambiance.css"/>
		<link rel="stylesheet" href="resources/css/docs.css"/>
		<script type="text/javascript" src="resources/js/codemirror.js"></script>
		<script type="text/javascript" src="resources/js/clike.js"></script>
		<!--<script type="text/javascript" src="resources/js/javascript.js"></script>-->
		<style type="text/css">
			.CodeMirror {
				border-top: 1px solid black;
				border-bottom: 1px solid black;
			}
			.CodeMirror-scroll{
				font-size: 14px;
			}
			.CodeMirror-fullscreen {
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 9999;
				margin: 0;
				padding: 0;
				border: 0px solid #BBBBBB;
				opacity: 1;
			}
		</style>
		<script type="text/javascript">
			window.onload=function(){
				var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
					lineNumbers: true,
					theme:'ambiance',
					mode: 'text/x-c++src',
					//mode: 'text/javascript',
					matchBrackets: true,
					tabSize: 4,
					indentUnit: 4,
					indentWithTabs: true,
					extraKeys: {
						"F11": function() {
							var scroller = editor.getScrollerElement();
							if (scroller.className.search(/\bCodeMirror-fullscreen\b/) === -1) {
								scroller.className += " CodeMirror-fullscreen";
								scroller.style.height = "100%";
								scroller.style.width = "100%";
								editor.refresh();
							} else {
								scroller.className = scroller.className.replace(" CodeMirror-fullscreen", "");
								scroller.style.height = '';
								scroller.style.width = '';
								editor.refresh();
							}
						},
						"Esc": function() {
							var scroller = editor.getScrollerElement();
							if (scroller.className.search(/\bCodeMirror-fullscreen\b/) !== -1) {
								scroller.className = scroller.className.replace(" CodeMirror-fullscreen", "");
								scroller.style.height = '';
								scroller.style.width = '';
								editor.refresh();
							}
						},
						"F10":function(){
							editor.save();
						}
					}
				});
			}
		</script>
    </head>
    <body>
		<form>
			<textarea id="code" name="code">
#include <iostream>

using namespace std;

int main(){
	cout<<"hola mundo"<<endl;
	return 0;
}
			</textarea>
		</form>
    </body>
</html>
