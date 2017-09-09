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
});

var users = [];

// Ejemplo de uso de .find() o filter():
[1,2,3,4].find(e => e % 2 === 0);;
[{color: 'red'}].find(e => e.color === 'red');
if ([{color: 'rd'}].find(e => e.color === 'red')) alert('lo encontre!');
if ([{color: 'red'}].find(e => e.color === 'red')) alert('lo encontre!');

// Tarea para el hogar:
//  - nodejar registrarse si ya existe un usuario con el mismo email
//  - no dejar registrarse sino concide la contraseña y la confirmación de contraseña
$('.js-register-form').submit(ev => {
  ev.preventDefault();

  var $form       = $(ev.target);
  var inputValues = collectInputValues($form);


  if (condition) {
    users.push({
      email:    inputValues.email,
      password: inputValues.password
    });

    alert('Gracias por registrarte!');

    $('backdrop').fadeOut();
  }
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
