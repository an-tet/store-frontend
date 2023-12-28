import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:store/provider/menu_provider.dart';

class Navbar extends StatelessWidget implements PreferredSizeWidget {
  const Navbar({super.key});

  @override
  Widget build(BuildContext context) {
    final isSmallScreen = MediaQuery.of(context).size.width < 600;
    final menuProvider = Provider.of<MenuProvider>(context);
    return isSmallScreen
        ? AppBar(
            title: Text(
                _getTitleByIndex(menuProvider.menuController.selectedIndex)),
            leading: IconButton(
              onPressed: () {
                // if (!Platform.isAndroid && !Platform.isIOS) {
                //   _controller.setExtended(true);
                // }
                menuProvider.menuKey.currentState?.openDrawer();
              },
              icon: const Icon(Icons.menu),
            ),
          )
        : const SizedBox.shrink();
  }

  String _getTitleByIndex(int index) {
    switch (index) {
      case 0:
        return 'Principal';
      case 1:
        return 'Usuarios';
      case 2:
        return 'Clientes';
      case 3:
        return 'Productos';
      case 4:
        return 'Ventas';
      default:
        return 'Not found page';
    }
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}
