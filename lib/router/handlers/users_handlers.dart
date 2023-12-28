import 'package:fluro/fluro.dart';
import 'package:provider/provider.dart';
import 'package:store/provider/auth_provider.dart';
import 'package:store/provider/menu_provider.dart';
import 'package:store/presentation/views/auth/login_view.dart';
import 'package:store/presentation/views/dashboard/users/users_create_view.dart';
import 'package:store/presentation/views/dashboard/users/users_list_view.dart';
import 'package:store/presentation/views/dashboard/users/users_modify_view.dart';

class UsersHandlers {
  static Handler list = Handler(handlerFunc: (context, params) {
    final authProvider = Provider.of<AuthProvider>(context!);

    if (authProvider.authStatus == AuthStatus.authenticated) {
      Provider.of<MenuProvider>(context, listen: false);
      return const UsersListView();
    } else {
      return const LoginView();
    }
  });

  static Handler create = Handler(handlerFunc: (context, params) {
    final authProvider = Provider.of<AuthProvider>(context!);

    if (authProvider.authStatus == AuthStatus.authenticated) {
      Provider.of<MenuProvider>(context, listen: false);
      return const UsersCreateView();
    } else {
      return const LoginView();
    }
  });

  static Handler edit = Handler(handlerFunc: (context, params) {
    final authProvider = Provider.of<AuthProvider>(context!);

    if (authProvider.authStatus == AuthStatus.authenticated) {
      Provider.of<MenuProvider>(context, listen: false);
      return const UsersEditView();
    } else {
      return const LoginView();
    }
  });
}
