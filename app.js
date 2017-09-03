var slideout = new Slideout({
  panel:     $('#panel')[0],
  menu:      $('#menu')[0],
  padding:   256,
  tolerance: 70
});

$('.js-login-form').submit(ev => {
  ev.preventDefault();
  // Tarea para el hogar: obtener los valores que el usuario ingreso
  // en los campos para email y contraseña y mostralos usando alert()
});

$('.js-post-form').submit(ev => {
  ev.preventDefault();

  var $titleInput = $('input[name="title"]');
  var $bodyInput  = $('textarea[name="body"]');

  var title = $titleInput.val();
  var body  = $bodyInput.val();

  var $post = $(`
    <div class='post'>
      <h3>${title}</h3>
      <p>${body}</p>
    </div>
  `);

  $('.posts-container').append($post);

  $titleInput.val('');
  $bodyInput.val('');
});
