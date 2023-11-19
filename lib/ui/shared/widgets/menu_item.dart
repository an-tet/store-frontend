import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class MenuItem extends StatefulWidget {
  final String text;
  final IconData icon;
  final bool isActive;
  final bool hideText;
  final Function onPressed;
  final Color color;

  const MenuItem({
    super.key,
    required this.text,
    required this.icon,
    this.isActive = false,
    this.hideText = true,
    this.color = Colors.white,
    required this.onPressed,
  });

  @override
  State<MenuItem> createState() => _MenuItemState();
}

class _MenuItemState extends State<MenuItem> {
  bool isHover = false;

  @override
  Widget build(BuildContext context) {
    return AnimatedContainer(
      duration: const Duration(milliseconds: 300),
      color: isHover || widget.isActive
          ? Colors.white.withOpacity(0.1)
          : Colors.transparent,
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: widget.isActive ? null : () => widget.onPressed(),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 10),
            child: MouseRegion(
              onEnter: (_) => setState(() => isHover = true),
              onExit: (_) => setState(() => isHover = false),
              child: Row(
                children: [
                  Icon(
                    widget.icon,
                    color: Colors.white,
                  ),
                  SizedBox(width: widget.hideText ? 0 : 10),
                  Text(
                    widget.hideText ? '' : widget.text,
                    style: GoogleFonts.roboto(
                      color: Colors.white,
                      fontSize: 10,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
