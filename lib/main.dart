import 'package:flutter/material.dart';
import 'package:store/router/router.dart';
import 'package:store/ui/layouts/auth/auth_layout.dart';

void main() {
  RouterManager.configureRoutes();
  runApp(const MainApp());
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
    );
  }
}
