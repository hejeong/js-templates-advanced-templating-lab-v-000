function init() {
  //put any page initialization/handlebars initialization here
  let formTemplate = document.getElementById('recipe-form-template').innerHTML;
  let templateFunction = Handlebars.compile(formTemplate);
  let html = templateFunction();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
