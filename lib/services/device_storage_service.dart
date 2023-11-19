import 'package:shared_preferences/shared_preferences.dart';

class DeviceStorageService {
  static late SharedPreferences preferences;

  static Future<void> configurePreferences() async {
    SharedPreferences.setPrefix('');
    preferences = await SharedPreferences.getInstance();
  }
}
