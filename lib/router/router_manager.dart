import 'package:fluro/fluro.dart';
import 'package:store/router/handlers/auth_handlers.dart';
import 'package:store/router/handlers/dashboard_handlers.dart';
import 'package:store/router/handlers/no_page_found_handlers.dart';

class RouterManager {
  static final FluroRouter router = FluroRouter();

  static String rootRoute = '/';
  static String loginRoute = '/auth/login';
  static String recoveryRoute = '/auth/recovery';

  static String dashboardRoute = '/dashboard';

  static void configureRoutes() {
    router.define(
      rootRoute,
      handler: AuthHandlers.login,
      transitionType: TransitionType.none,
    );
    router.define(
      loginRoute,
      handler: AuthHandlers.login,
      transitionType: TransitionType.none,
    );
    router.define(
      recoveryRoute,
      handler: AuthHandlers.recovery,
      transitionType: TransitionType.none,
    );
    router.define(
      dashboardRoute,
      handler: DashboardHandler.dashboard,
      transitionType: TransitionType.none,
    );
    router.notFoundHandler = NoPageFoundHandlers.noPageFound;
  }
}
