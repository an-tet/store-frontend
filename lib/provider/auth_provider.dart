import 'package:flutter/material.dart';
import 'package:store/router/router_manager.dart';
import 'package:store/services/device_storage_service.dart';
import 'package:store/services/navigation_service.dart';

enum AuthStatus { authenticated, authenticating, unauthenticated }

class AuthProvider extends ChangeNotifier {
  String? _token;
  AuthStatus authStatus = AuthStatus.authenticating;

  AuthProvider() {
    isAuthenticated();
  }

  login(String user, String password) async {
    _token = 'token_code';
    DeviceStorageService.preferences.setString('token', _token!);
    authStatus = AuthStatus.authenticated;
    notifyListeners();
    NavigationService.navigateTo(RouterManager.dashboardRoute);
  }

  logout() async {
    DeviceStorageService.preferences.remove('token');
    authStatus = AuthStatus.unauthenticated;
    notifyListeners();
    NavigationService.navigateTo(RouterManager.loginRoute);
  }

  Future<bool> isAuthenticated() async {
    if (DeviceStorageService.preferences.getString('token') == null) {
      authStatus = AuthStatus.unauthenticated;
      notifyListeners();
      return false;
    }

    //TODO: remove line and request login with the backend
    await Future.delayed(const Duration(seconds: 2));

    authStatus = AuthStatus.authenticated;
    notifyListeners();
    return true;
  }
}
