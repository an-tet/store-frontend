import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  final Function onPressed;
  final String text;
  final bool isTextButton;
  final bool isFilled;
  final IconData icon;

  const CustomButton({
    Key? key,
    required this.onPressed,
    this.text = '',
    this.isTextButton = false,
    required this.icon,
    this.isFilled = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return FilledButton(
        onPressed: () => onPressed(),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Icon(icon),
            if (text != '')
              Text(
                text,
              ),
          ],
        ));
  }
}
