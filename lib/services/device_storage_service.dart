import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class DeviceStorageService {
  static late SharedPreferences preferences;

  static Future<void> configurePreferences() async {
    WidgetsFlutterBinding.ensureInitialized();
    SharedPreferences.setPrefix('');
    preferences = await SharedPreferences.getInstance();
  }
}
