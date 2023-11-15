import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:store/constants/colors_constants.dart';
import 'package:store/provider/auth_provider.dart';
import 'package:store/router/router_manager.dart';
import 'package:store/ui/layouts/auth/auth_layout.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  RouterManager.configureRoutes();
  runApp(const AppState());
}

class AppState extends StatelessWidget {
  const AppState({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(providers: [
      ChangeNotifierProvider(create: (_) => AuthProvider()),
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
      builder: (_, child) {
        return AuthLayout(
          child: child!,
        );
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
}
