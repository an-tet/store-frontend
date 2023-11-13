import 'package:fluro/fluro.dart';
import 'package:store/router/handlers/auth_handlers.dart';
import 'package:store/router/handlers/no_page_found_handlers.dart';

class RouterManager {
  static final FluroRouter router = FluroRouter();

  static String rootRoute = '/';
  static String loginRoute = '/auth/login';
  static String recoveryRoute = '/auth/recovery';

  static String dashboardRoute = '/dashboard';

  static void configureRoutes() {
    router.define(rootRoute, handler: AuthHandlers.login);
    router.define(loginRoute, handler: AuthHandlers.login);
    router.define(recoveryRoute, handler: AuthHandlers.recovery);
    // router.define(dashboardRoute, handler: handler)
    router.notFoundHandler = NoPageFoundHandlers.noPageFound;
  }
}
