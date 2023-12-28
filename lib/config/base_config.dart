import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:store/config/auth_config.dart';
import 'package:store/config/theme/app_theme.dart';
import 'package:store/provider/auth_provider.dart';
import 'package:store/provider/menu_provider.dart';
import 'package:store/provider/user_create_form_provider.dart';
import 'package:store/provider/user_modify_form_provider.dart';
import 'package:store/router/router_manager.dart';
import 'package:store/services/navigation_service.dart';

class BaseConfig {
  MultiProvider get getConfig {
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
            child: AuthConfig().authValidation(context, child!));
      },
      theme: AppTheme().themeLight,
      darkTheme: AppTheme().themeDark,
      themeMode: ThemeMode.dark,
    );
  }
}
