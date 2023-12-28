import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:store/provider/menu_provider.dart';
import 'package:store/presentation/shared/navbar.dart';
import 'package:store/presentation/shared/sidebar.dart';

class DashboardLayout extends StatelessWidget {
  final Widget child;
  const DashboardLayout({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    final menuProvider = Provider.of<MenuProvider>(context);
    final isSmallScreen = MediaQuery.of(context).size.width < 600;
    return Scaffold(
      key: menuProvider.menuKey,
      appBar: const Navbar(),
      drawer: const SideBar(),
      drawerEnableOpenDragGesture: true,
      body: Row(
        children: [
          if (!isSmallScreen) const SideBar(),
          Expanded(
            child: Center(child: child),
          ),
        ],
      ),
    );
  }
}
