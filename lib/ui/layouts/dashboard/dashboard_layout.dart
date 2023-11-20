import 'package:flutter/material.dart';
import 'package:store/ui/shared/navbar.dart';
import 'package:store/ui/shared/sidebar.dart';

class DashboardLayout extends StatefulWidget {
  final Widget child;
  const DashboardLayout({super.key, required this.child});

  @override
  State<DashboardLayout> createState() => _DashboardLayoutState();
}

class _DashboardLayoutState extends State<DashboardLayout> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Row(
        children: [
          const SideBar(),
          Expanded(
            child: Column(
              children: [
                const Navbar(),
                Expanded(
                  child: Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 20,
                      vertical: 10,
                    ),
                    child: widget.child,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
