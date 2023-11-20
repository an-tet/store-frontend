import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:store/constants/colors_constants.dart';
import 'package:store/provider/side_menu_provider.dart';
import 'package:store/router/router_manager.dart';
import 'package:store/services/navigation_service.dart';
import 'package:store/ui/shared/widgets/logo.dart';
import 'package:store/ui/shared/widgets/menu_item.dart';

class SideBar extends StatefulWidget {
  const SideBar({super.key});

  @override
  State<SideBar> createState() => _SideBarState();
}

class _SideBarState extends State<SideBar> with SingleTickerProviderStateMixin {
  final bool _hideText = true;
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final sideMenuProvider = Provider.of<SideMenuProvider>(context);
    return AnimatedContainer(
      duration: const Duration(milliseconds: 200),
      // width: size.width < 540 ? 90 : 140, TODO: check the animation
      width: 90,
      height: double.infinity,
      margin: const EdgeInsets.all(10),
      decoration: buildBoxDecoration(),
      child: ListView(
        physics: const ClampingScrollPhysics(),
        children: [
          const SizedBox(height: 10),
          const Logo(),
          const SizedBox(height: 40),
          MenuItem(
              text: 'Principal',
              icon: Icons.home_outlined,
              isActive:
                  sideMenuProvider.currentPage == RouterManager.dashboardRoute,
              hideText: _hideText,
              onPressed: () =>
                  NavigationService.navigateTo(RouterManager.dashboardRoute)),
          MenuItem(
              text: 'Usuarios',
              icon: Icons.support_agent_outlined,
              isActive:
                  sideMenuProvider.currentPage == RouterManager.usersListRoute,
              hideText: _hideText,
              onPressed: () =>
                  NavigationService.navigateTo(RouterManager.usersListRoute)),
          MenuItem(
            text: 'Clientes',
            icon: Icons.person_3_outlined,
            isActive: false,
            hideText: _hideText,
            onPressed: () {},
          ),
          MenuItem(
            text: 'Productos',
            icon: Icons.shopping_bag_outlined,
            isActive: false,
            hideText: _hideText,
            onPressed: () {},
          ),
          MenuItem(
            text: 'Ventas',
            icon: Icons.store_outlined,
            isActive: false,
            hideText: _hideText,
            onPressed: () {},
          ),
          Divider(color: Colors.white.withOpacity(0.3)),
          MenuItem(
            text: 'Informes',
            icon: Icons.troubleshoot_outlined,
            isActive: false,
            hideText: _hideText,
            onPressed: () {},
          ),
        ],
      ),
    );
  }

  BoxDecoration buildBoxDecoration() => const BoxDecoration(
        color: ColorsConstants.primary,
        boxShadow: [
          BoxShadow(
            color: Colors.black26,
            blurRadius: 15,
          )
        ],
        borderRadius: BorderRadius.all(
          Radius.circular(15),
        ),
      );
}
