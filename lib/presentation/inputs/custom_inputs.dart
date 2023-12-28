import 'package:flutter/material.dart';

class CustomDecorationInput {
  static InputDecoration loginInputDecoration({
    required String hint,
    required String label,
    required IconData icon,
  }) {
    return InputDecoration(
      border: const OutlineInputBorder(),
      hintText: hint,
      labelText: label,
      icon: Icon(icon),
    );
  }

  static InputDecoration normalTextInputDecoration({
    required String hint,
    required String label,
  }) {
    return InputDecoration(
      border: const OutlineInputBorder(),
      hintText: hint,
      labelText: label,
    );
  }
}
