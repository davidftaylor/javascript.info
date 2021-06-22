/* Task:

The user object was modified. Now instead of two functions loginOk/loginFail, it has a single function user.login(true/false).

What should we pass askPassword in the code below, so that it calls user.login(true) as ok and user.login(false) as fail?

Your changes should only modify the last line.

*/

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));