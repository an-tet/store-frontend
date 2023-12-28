import 'package:fluro/fluro.dart';
import 'package:store/presentation/views/no_page_found_view.dart';

class NoPageFoundHandlers {
  static Handler noPageFound = Handler(handlerFunc: (context, params) {
    return const NoPageFound();
  });
}
