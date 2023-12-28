import 'package:drift/native.dart';
import 'package:flutter/material.dart';
import 'package:store/config/database/database_manager.dart';
import 'package:store/config/base_config.dart';
import 'package:store/router/router_manager.dart';
import 'package:store/services/device_storage_service.dart';

Future<void> main() async {
  Database(NativeDatabase.memory());
  await DeviceStorageService.configurePreferences();
  WidgetsFlutterBinding.ensureInitialized();
  RouterManager.configureRoutes();
  runApp(const AppState());
}

class AppState extends StatelessWidget {
  const AppState({super.key});

  @override
  Widget build(BuildContext context) {
    return BaseConfig().getConfig;
  }
}
