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

var users = loadUsers();

$('.js-login-form').submit(ev => {
  ev.preventDefault();

  var $form       = $(ev.target);
  var inputValues = collectInputValues($form);
  var user        = users.find(u => u.email === inputValues.email);

  if (!user) return alert('No existe un usuario con ese email');

  if (user.password === inputValues.password) {
    alert('Bienvenidos!');
    $('backdrop').fadeOut(1000);
  }

  resetInputValues($form);
});

$('.js-register-form').submit(ev => {
  ev.preventDefault();

  var $form       = $(ev.target);
  var inputValues = collectInputValues($form);

  if (users.find(u => u.email === inputValues.email))
    return alert('El usuario con ese email ya existe');

  if (inputValues.password === inputValues.passwordConfirmation) {
    users.push({
      email:    inputValues.email,
      password: inputValues.password
    });

    updateUsers(users);

    alert('Gracias por registrarte!');

    $('backdrop').fadeOut();

    resetInputValues($form);
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

// Usage example:
//   updateUsers([{email: 'password'}])
function updateUsers(newValue) {
  localStorage.setItem('users', JSON.stringify(newValue));
}

function loadUsers() {
  var value = JSON.parse(localStorage.getItem('users'));
  if (value && value.constructor === Array) return value;
  else return [];
}
