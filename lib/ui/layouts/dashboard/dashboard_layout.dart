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
      backgroundColor: const Color(0xffEDF1F2),
      body: Row(
        children: [
          const SideBar(),
          Expanded(
            child: Column(
              children: [
                // Navbar
                const Navbar(),
                // View
                Expanded(
                    child: Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 20,
                    vertical: 10,
                  ),
                  child: widget.child,
                )),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
