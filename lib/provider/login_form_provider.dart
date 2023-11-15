import 'package:flutter/material.dart';
import 'package:store/provider/auth_provider.dart';

class LoginFormProvider extends ChangeNotifier {
  GlobalKey<FormState> formKey = GlobalKey();
  String user = '';
  String password = '';

  validateForm() {
    if (formKey.currentState!.validate()) {
      return true;
    }
    return false;
  }
}
