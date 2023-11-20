import 'package:fluro/fluro.dart';
import 'package:store/router/handlers/auth_handlers.dart';
import 'package:store/router/handlers/dashboard_handlers.dart';
import 'package:store/router/handlers/no_page_found_handlers.dart';
import 'package:store/router/handlers/users_handlers.dart';

class RouterManager {
  static final FluroRouter router = FluroRouter();

  static String rootRoute = '/';
  static String loginRoute = '/auth/login';
  static String recoveryRoute = '/auth/recovery';

  static String dashboardRoute = '/home';
  static String usersListRoute = '/users';
  static String usersCreateRoute = '/users/create';
  static String usersEditRoute = '/users/edit';

  static void configureRoutes() {
    _authRoutes();
    _dashboardRoutes();
    _usersRoutes();
    router.notFoundHandler = NoPageFoundHandlers.noPageFound;
  }

  static void _authRoutes() {
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
  }

  static _dashboardRoutes() => router.define(
        dashboardRoute,
        handler: DashboardHandler.dashboard,
        transitionType: TransitionType.none,
      );

  static void _usersRoutes() {
    router.define(
      usersListRoute,
      handler: UsersHandlers.list,
      transitionType: TransitionType.none,
    );

    router.define(
      usersCreateRoute,
      handler: UsersHandlers.create,
      transitionType: TransitionType.none,
    );
    router.define(
      usersEditRoute,
      handler: UsersHandlers.edit,
      transitionType: TransitionType.none,
    );
  }
}
