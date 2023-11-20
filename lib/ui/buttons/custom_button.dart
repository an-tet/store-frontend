import 'package:flutter/material.dart';
import 'package:store/constants/colors_constants.dart';

class CustomButton extends StatelessWidget {
  final Function onPressed;
  final String text;
  final bool isTextButton;
  final Color color;
  final bool isFilled;
  final IconData icon;

  const CustomButton({
    Key? key,
    required this.onPressed,
    this.text = '',
    this.isTextButton = false,
    required this.icon,
    this.color = ColorsConstants.tertiary,
    this.isFilled = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return OutlinedButton(
        style: ButtonStyle(
          shape: MaterialStateProperty.all(
            RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
          ),
          backgroundColor: MaterialStateProperty.all(color),
          overlayColor: MaterialStateProperty.all(color.withOpacity(0.3)),
        ),
        onPressed: () => onPressed(),
        child: Row(
          children: [
            Icon(
              icon,
              color: Colors.white,
            ),
            if (text != '')
              Text(
                text,
                style: const TextStyle(color: Colors.white),
              ),
          ],
        ));
  }
}
