import 'package:flutter/material.dart';
import 'package:store/constants/colors_constants.dart';

class NotificationIndicator extends StatelessWidget {
  const NotificationIndicator({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: double.infinity,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Stack(
            children: [
              const Icon(
                Icons.notifications_none_outlined,
                color: ColorsConstants.neutral,
              ),
              Positioned(
                right: 0,
                child: Container(
                  width: 5,
                  height: 5,
                  decoration: buildBoxDecoration(),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  BoxDecoration buildBoxDecoration() => const BoxDecoration(
        color: Colors.red,
        shape: BoxShape.circle,
      );
}
