import 'package:flutter/material.dart';
import 'package:store/constants/colors_constants.dart';

class CustomInputs {
  static InputDecoration loginInputDecoration({
    required String hint,
    required String label,
    required IconData icon,
  }) {
    return InputDecoration(
      border: OutlineInputBorder(
        borderSide: BorderSide(color: Colors.white.withOpacity(0.3)),
      ),
      enabledBorder: const OutlineInputBorder(
          borderSide: BorderSide(color: ColorsConstants.tertiary)),
      hintText: hint,
      labelText: label,
      prefixIcon: Icon(icon, color: ColorsConstants.neutral),
      labelStyle: const TextStyle(color: ColorsConstants.neutral),
      hintStyle: const TextStyle(color: ColorsConstants.neutral),
    );
  }
}
