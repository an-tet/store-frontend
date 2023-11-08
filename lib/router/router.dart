import 'package:fluro/fluro.dart';
import 'package:store/router/handlers/auth_handlers.dart';
import 'package:store/router/handlers/no_page_found_handlers.dart';

class RouterManager {
  static final FluroRouter router = FluroRouter();

  static String rootRoute = '/';
  static String loginRoute = '/auth/login';
  static String registerRoute = '/auth/register';

  static String dashboardRoute = '/dashboard';
  static String notFoundRoute = '/no-page-pound';

  static void configureRoutes() {
    router.define(loginRoute, handler: AuthHandlers.login);
    router.define(registerRoute, handler: AuthHandlers.login);
    // router.define(dashboardRoute, handler: handler)
    router.define(dashboardRoute, handler: NoPageFoundHandlers.noPageFound);
  }
}
