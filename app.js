Post.load();

var slideout = new Slideout({
  panel:     $('#panel')[0],
  menu:      $('#menu')[0],
  padding:   256,
  tolerance: 70
});

$('.js-login-button').click(ev => $('backdrop').fadeIn(1000));

$('.js-logout-button').click(ev => Auth.logout());

$('body').click(ev => {
  if (ev.target == $('backdrop')[0]) $('backdrop').fadeOut();
});

$('.js-login-form').submit(ev => {
  ev.preventDefault();
  var $form       = $(ev.target);
  var inputValues = collectInputValues($form);
  Auth.login(inputValues);
  resetInputValues($form);
});

$('.js-register-form').submit(ev => {
  ev.preventDefault();
  var $form       = $(ev.target);
  var inputValues = collectInputValues($form);
  Auth.register(inputValues);
  resetInputValues($form);
});

$('.js-post-form').submit(ev => {
  ev.preventDefault();

  var $form       = $(ev.target);
  var inputValues = collectInputValues($form);
  new Post(inputValues).save();
  resetInputValues($form);
});

function collectInputValues($form) {
  var res = {};

  $form.find('input, textarea').each((_i, e) => {
    var inputName  = $(e).attr('name');
    var inputValue = $(e).val();

    res[inputName] = inputValue;
  });

  return res;
}

function resetInputValues($form) {
  $form
    .find('input, textarea')
    .each((_i, e) => $(e).val(''));
}
