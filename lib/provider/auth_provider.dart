import 'package:flutter/material.dart';

class AuthProvider extends ChangeNotifier {
  String? _token;

  //TODO: pending implementation with local storage
  login(String user, String password) {
    _token = 'token_code';
    print(_token);
    notifyListeners();
  }
}
