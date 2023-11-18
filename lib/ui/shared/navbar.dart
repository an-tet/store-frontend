import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:store/constants/colors_constants.dart';
import 'package:store/ui/shared/widgets/notification_indicator.dart';

class Navbar extends StatelessWidget {
  const Navbar({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

    return Container(
      width: double.infinity,
      height: 50,
      margin: const EdgeInsets.only(top: 20),
      padding: const EdgeInsets.only(left: 20),
      child: Row(
        children: [
          if (size.width > 540)
            const VerticalDivider(color: ColorsConstants.primary),
          Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Text(
                    'Principal',
                    style: GoogleFonts.roboto(
                      color: ColorsConstants.primary,
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(width: size.width * 0.05),
                  Text(
                    'Principal',
                    style: GoogleFonts.roboto(
                      color: ColorsConstants.tertiary,
                      fontSize: 14,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
              if (size.width > 540)
                Text(
                  'Esta es la pagina principal del aplicativo',
                  style: GoogleFonts.roboto(
                    color: ColorsConstants.neutral,
                    fontSize: 14,
                    fontWeight: FontWeight.w300,
                  ),
                ),
            ],
          ),
          const Spacer(),
          const NotificationIndicator(),
          SizedBox(width: size.width * 0.04),
        ],
      ),
    );
  }
}
