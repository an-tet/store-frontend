import 'package:flutter/material.dart';

class UserCreateFormProvider extends ChangeNotifier {
  GlobalKey<FormState> formKey = GlobalKey();
  String id = '';
  String documentType = '';
  String documentNumber = '';
  String firstName = '';
  String middleName = '';
  String lastName = '';
  String secondLastName = '';
  String type = '';
  String status = '';
  String email = '';
  String birthDate = '';
  String phone = '';
  String contact = '';
  String skirtSize = '';
  String rol = '';

  validateForm() {
    if (formKey.currentState!.validate()) {
      return true;
    }
    return false;
  }
}
