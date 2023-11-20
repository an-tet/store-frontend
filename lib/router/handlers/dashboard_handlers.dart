import 'package:fluro/fluro.dart';
import 'package:provider/provider.dart';
import 'package:store/provider/auth_provider.dart';
import 'package:store/provider/side_menu_provider.dart';
import 'package:store/router/router_manager.dart';
import 'package:store/ui/views/auth/login_view.dart';
import 'package:store/ui/views/dashboard/dashboard_view.dart';

class DashboardHandler {
  static Handler dashboard = Handler(handlerFunc: (context, params) {
    final authProvider = Provider.of<AuthProvider>(context!);

    if (authProvider.authStatus == AuthStatus.authenticated) {
      Provider.of<SideMenuProvider>(context, listen: false)
          .setCurrentPageUrl(RouterManager.dashboardRoute);
      return const DashboardView();
    } else {
      return const LoginView();
    }
  });
}
