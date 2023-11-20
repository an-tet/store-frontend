import 'package:flutter/material.dart';

class SideMenuProvider extends ChangeNotifier {
  static String _currentPage = '';

  String get currentPage => _currentPage;

  void setCurrentPageUrl(String url) {
    _currentPage = url;
    Future.delayed(const Duration(milliseconds: 100), () {
      notifyListeners();
    });
  }
}
