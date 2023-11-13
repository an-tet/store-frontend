import 'package:fluro/fluro.dart';
import 'package:store/ui/views/login_view.dart';
import 'package:store/ui/views/recovery_view.dart';

class AuthHandlers {
  static Handler login = Handler(handlerFunc: (context, params) {
    return const LoginView();
  });

  static Handler recovery = Handler(handlerFunc: (context, params) {
    return const RecoveryView();
  });
}
