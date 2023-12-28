import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:sidebarx/sidebarx.dart';
import 'package:store/provider/auth_provider.dart';
import 'package:store/provider/menu_provider.dart';

class SideBar extends StatefulWidget {
  const SideBar({super.key});

  @override
  State<SideBar> createState() => _SideBarState();
}

class _SideBarState extends State<SideBar> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final menuProvider = Provider.of<MenuProvider>(context);
    final authProvider = Provider.of<AuthProvider>(context);
    return SidebarX(
      controller: menuProvider.menuController,
      theme: SidebarXTheme(
        margin: const EdgeInsets.all(10),
        itemTextPadding: const EdgeInsets.only(left: 10),
        selectedItemTextPadding: const EdgeInsets.only(left: 10),
        itemDecoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
        ),
        selectedItemDecoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          boxShadow: [
            BoxShadow(
              color: Colors.white.withOpacity(0.28),
            )
          ],
        ),
      ),
      extendedTheme: const SidebarXTheme(
        width: 200,
        // decoration: BoxDecoration(
        //   color: ColorsConstants.primary,
        // ),
      ),
      footerDivider: Divider(
        color: Colors.white.withOpacity(0.3),
        height: 1,
      ),
      headerBuilder: (context, extended) {
        return const SizedBox(
          height: 100,
          child: Padding(
            padding: EdgeInsets.all(16.0),
            child: Icon(Icons.image),
          ),
        );
      },
      animationDuration: const Duration(milliseconds: 500),
      items: menuProvider.getMenuItems,
      footerItems: [
        SidebarXItem(
          icon: Icons.settings,
          label: 'Settings',
          onTap: () {},
        ),
        SidebarXItem(
          icon: Icons.logout,
          label: 'Logout',
          onTap: () {
            authProvider.logout();
          },
        ),
      ],
    );
  }
}
