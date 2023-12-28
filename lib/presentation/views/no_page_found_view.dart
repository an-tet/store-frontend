import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:store/constants/colors_constants.dart';

class NoPageFound extends StatelessWidget {
  const NoPageFound({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        '404',
        style: GoogleFonts.robotoMono(
            fontSize: 70,
            fontWeight: FontWeight.bold,
            color: ColorsConstants.neutral),
      ),
    );
  }
}
