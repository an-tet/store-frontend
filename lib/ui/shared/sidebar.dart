import 'package:flutter/material.dart';
import 'package:store/constants/colors_constants.dart';
import 'package:store/ui/shared/widgets/Logo.dart';

class SideBar extends StatelessWidget {
  const SideBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 100,
      height: double.infinity,
      margin: const EdgeInsets.all(10),
      decoration: buildBoxDecoration(),
      child: ListView(
        physics: const ClampingScrollPhysics(),
        children: const [
          Logo(),
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
