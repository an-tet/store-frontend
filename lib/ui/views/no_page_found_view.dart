import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class NoPageFound extends StatelessWidget {
  const NoPageFound({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        '',
        style: GoogleFonts.robotoMono(
          fontSize: 70,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}
