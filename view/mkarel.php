<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Editor</title>
		<link rel="stylesheet" href="resources/css/codemirror.css"/>
		<link rel="stylesheet" href="resources/css/ambiance.css"/>
		<link rel="stylesheet" href="resources/css/docs.css"/>
		<link rel="stylesheet" href="resources/css/mkarel.css"/>
		<link type="text/css" href="resources/css/jquery-ui.css" rel="stylesheet" />
		<script type="text/javascript" src="resources/js/jquery.min.js"></script>
		<script type="text/javascript" src="resources/js/jquery-ui.min.js"></script>
		<script src="resources/js/jquery-css-transform.js" type="text/javascript"></script>
		<script src="resources/js/jquery-animate-css-rotate-scale.js" type="text/javascript"></script>
		<script type="text/javascript" src="resources/js/codemirror.js"></script>
		<!--<script type="text/javascript" src="resources/js/clike.js"></script>-->
		<script type="text/javascript" src="resources/js/javascript.js"></script>
		<script type="text/javascript" src="resources/js/mkarel.js"></script>
		

    </head>
    <body>
		<div id="header" class="ui-widget-header">
			<div style="margin-top: 4px;">
				Robot KAREL
			</div>
		</div>
		<div id="left" class="ui-widget-content">
			<div id="tools" class="ui-state-default">
				<button id="ejecutar">
					<span class="ui-icon ui-icon-play"></span>
					&nbsp;&nbsp;Ejecutar
				</button>
			</div>
			<div id="editor">
				<form>
					<textarea id="code" name="code">
function acciones(){
	
}</textarea>
				</form>
			</div>
		</div>
		<div id="right">
		</div>
		<div id="footer" class="ui-widget-header">
			<div style="margin-top: 4px;">
				Taller de Fundamentos de Programación e Introducción a la
				Programación Competitiva
			</div>
		</div>
	</body>
</html>
