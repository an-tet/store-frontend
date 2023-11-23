import 'package:flutter/material.dart';
import 'package:sidebarx/sidebarx.dart';
import 'package:store/router/router_manager.dart';
import 'package:store/services/navigation_service.dart';

class MenuProvider extends ChangeNotifier {
  final _controller = SidebarXController(selectedIndex: 0, extended: true);
  final _key = GlobalKey<ScaffoldState>();

  GlobalKey<ScaffoldState> get menuKey => _key;

  SidebarXController get menuController => _controller;

  List<SidebarXItem> get getMenuItems => [
        SidebarXItem(
          icon: Icons.home_outlined,
          label: 'Principal',
          onTap: () =>
              NavigationService.navigateTo(RouterManager.dashboardRoute),
        ),
        SidebarXItem(
          icon: Icons.support_agent_outlined,
          label: 'Usuarios',
          onTap: () =>
              NavigationService.navigateTo(RouterManager.usersListRoute),
        ),
        SidebarXItem(
          icon: Icons.person_3_outlined,
          label: 'Clientes',
          onTap: () => {},
        ),
        SidebarXItem(
          icon: Icons.shopping_bag_outlined,
          label: 'Productos',
          onTap: () => {},
        ),
      ];
}
