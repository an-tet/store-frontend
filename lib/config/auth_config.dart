import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:store/presentation/layouts/auth/auth_layout.dart';
import 'package:store/presentation/layouts/dashboard/dashboard_layout.dart';
import 'package:store/presentation/layouts/splash/splash_screen_layout.dart';
import 'package:store/provider/auth_provider.dart';

class AuthConfig {
  Widget authValidation(BuildContext context, Widget child) {
    final authProvider = Provider.of<AuthProvider>(context);

    if (authProvider.authStatus == AuthStatus.authenticating) {
      return const SplashScreenLayout();
    }

    if (authProvider.authStatus == AuthStatus.authenticated) {
      return DashboardLayout(child: child);
    } else {
      return AuthLayout(child: child);
    }
  }
}
