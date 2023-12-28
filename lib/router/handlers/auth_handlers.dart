import 'package:fluro/fluro.dart';
import 'package:provider/provider.dart';
import 'package:store/provider/auth_provider.dart';
import 'package:store/presentation/views/auth/login_view.dart';
import 'package:store/presentation/views/auth/recovery_view.dart';
import 'package:store/presentation/views/dashboard/dashboard_view.dart';

class AuthHandlers {
  static Handler login = Handler(handlerFunc: (context, params) {
    final authProvider = Provider.of<AuthProvider>(context!);

    if (authProvider.authStatus == AuthStatus.unauthenticated) {
      return const LoginView();
    } else {
      return const DashboardView();
    }
  });

  static Handler recovery = Handler(handlerFunc: (context, params) {
    final authProvider = Provider.of<AuthProvider>(context!);

    if (authProvider.authStatus == AuthStatus.unauthenticated) {
      return const RecoveryView();
    } else {
      return const DashboardView();
    }
  });
}
