window.Auth = new class Auth {
  constructor() {
    this.users = this._loadUsers();
    this.currentUser = LS.get('currentUser');
    this._onCurrentUserChanged(this.currentUser);
  }

  login(inputValues) {
    var user = this.users.find(u => u.email === inputValues.email);

    if (!user) return alert('No existe un usuario con ese email');

    if (user.password === inputValues.password) {
      alert('Bienvenidos!');
      LS.set('currentUser', user);
      this.currentUser = user;
      this._onCurrentUserChanged(user);
      $('backdrop').fadeOut(1000);
    }
  }

  register(inputValues) {
    if (this.users.find(u => u.email === inputValues.email))
      return alert('El usuario con ese email ya existe');

    if (inputValues.password === inputValues.passwordConfirmation) {
      var user = {
        email:    inputValues.email,
        password: inputValues.password
      }

      this.users.push(user);
      this._updateUsers(users);

      alert('Gracias por registrarte!');

      $('backdrop').fadeOut();
    } else
      alert('Las contraseñas no coinciden');
  }

  _onCurrentUserChanged(cu) {
    if (cu) {
      $('.js-avatar').show();
      $('.js-login-button').hide();
      $('.js-logout-button').show();
    } else {
      $('.js-avatar').hide();
      $('.js-login-button').show();
      $('.js-logout-button').hide();
    }
  }

  _loadUsers() {
    var value = LS.get('users');
    if (value && value.constructor === Array) return value;
    else return [];
  }

  // Usage example:
  //   this.updateUsers([{email: 'password'}])
  _updateUsers(newValue) { LS.set('users', newValue); }
};
