import Translator from "./translator.js";

var translator = new Translator();


$('#header').on('click', 'button.btn.btn-primary.language-toggle', function () {
  //  console.log($(this).attr('id'));
    translator.load($(this).attr('id'));

});
