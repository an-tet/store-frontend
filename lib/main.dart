import 'package:drift/drift.dart';
import 'package:drift/native.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:store/constants/colors_constants.dart';
import 'package:store/datasources/database_manager.dart';
import 'package:store/provider/auth_provider.dart';
import 'package:store/provider/menu_provider.dart';
import 'package:store/provider/user_create_form_provider.dart';
import 'package:store/provider/user_modify_form_provider.dart';
import 'package:store/router/router_manager.dart';
import 'package:store/services/device_storage_service.dart';
import 'package:store/services/navigation_service.dart';
import 'package:store/ui/layouts/auth/auth_layout.dart';
import 'package:store/ui/layouts/dashboard/dashboard_layout.dart';
import 'package:store/ui/layouts/splash/splash_screen_layout.dart';

Future<void> main() async {
  final db = Database(NativeDatabase.memory());
  await db.user.all().get().then((listUser) => listUser.forEach((user) => print(
      '${user.id} - ${user.username} - ${user.password} - ${user.status}\n')));
  await DeviceStorageService.configurePreferences();
  WidgetsFlutterBinding.ensureInitialized();
  RouterManager.configureRoutes();
  runApp(const AppState());
}

class AppState extends StatelessWidget {
  const AppState({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(providers: [
      ChangeNotifierProvider(
        create: (_) => AuthProvider(),
        lazy: false,
      ),
      ChangeNotifierProvider(
        create: (_) => MenuProvider(),
        lazy: false,
      ),
      ChangeNotifierProvider(
        create: (_) => UserCreateFormProvider(),
        lazy: false,
      ),
      ChangeNotifierProvider(
        create: (_) => UserEditFormProvider(),
        lazy: false,
      ),
    ], child: const MainApp());
  }
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: RouterManager.rootRoute,
      onGenerateRoute: RouterManager.router.generator,
      navigatorKey: NavigationService.navigatorKey,
      builder: (_, child) {
        return ConstrainedBox(
            constraints: const BoxConstraints(minWidth: 300),
            child: authValidation(context, child!));
      },
      theme: ThemeData.light().copyWith(
        scrollbarTheme: const ScrollbarThemeData().copyWith(
          thumbColor: MaterialStateProperty.all(
            ColorsConstants.neutral,
          ),
        ),
      ),
    );
  }

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
