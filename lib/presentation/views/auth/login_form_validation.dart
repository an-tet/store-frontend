class LoginFormValidation {
  static Function loginValidation = (value, field) {
    if (value == null || value.isEmpty) {
      return 'El campo $field es obligatorio';
    }

    if (value.length < 6) {
      return 'El campo $field debe de ser mínimo 6 caracteres';
    }

    return null;
  };
}
