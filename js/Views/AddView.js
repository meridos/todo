define([],function(){function e(){var e='<section id="addBox"><form onsubmit="return app.add()"><input type="text" placeholder="Текст новой заметки" id="newNoteName" autofocus autocomplete="off" maxlength="250"><button type="submit">Сохранить</button><a href="#notes" class="close">&times;</a></form></section>';document.getElementById("app").innerHTML=e,document.getElementById("newNoteName").focus()}return{render:e}});