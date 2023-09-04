module.exports.signupErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "pseudo incorrect ou deja pris";
  if (err.message.includes("email")) errors.email = "Email deja pris";
  if (err.message.includes("password"))
    errors.password = "le mot de passe doit faire minimum 6 caracteres";
  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Ce pseudo est deja pris";
  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est deja enregistre";
  return errors;
};

module.exports.loginErrors = (err) => {
  let errors = { email: "", password: "" };
  if (err.message.includes("email")) errors.email = "Email inconnu";
  if (err.message.includes("password"))
    errors.password = "le mot de passe ne correspond pas";
  return errors;
};
