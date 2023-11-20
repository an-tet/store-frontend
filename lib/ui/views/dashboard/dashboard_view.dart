import 'package:flutter/material.dart';
import 'package:store/constants/colors_constants.dart';

class DashboardView extends StatelessWidget {
  const DashboardView({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Icon(Icons.photo, color: ColorsConstants.tertiary, size: 50),
    );
  }
}
