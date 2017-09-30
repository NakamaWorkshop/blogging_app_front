var slideout = new Slideout({
  panel:     $('#panel')[0],
  menu:      $('#menu')[0],
  padding:   256,
  tolerance: 70
});

$('.js-login-button').click(ev => {
  $('backdrop').fadeIn(1000);
});

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

  var $post = $(`
    <div class='post'>
      <h3>${inputValues.title}</h3>
      <p>${inputValues.body}</p>
    </div>
  `);

  $('.posts-container').append($post);

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
