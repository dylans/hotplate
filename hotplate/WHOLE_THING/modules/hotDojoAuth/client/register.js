require(["app/widgets/RegisterForm"], function( RegisterForm ){

  // Create the "application" object, and places them in the right spot.
  registerForm = new RegisterForm( {} , 'registerForm');
  registerForm.startup();

});
