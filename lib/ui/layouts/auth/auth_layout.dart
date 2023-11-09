import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:store/ui/layouts/auth/widgets/background.dart';

class AuthLayout extends StatelessWidget {
  final Widget child;

  const AuthLayout({
    Key? key,
    required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        physics: const ClampingScrollPhysics(),
        children: [
          _DesktopBody(child: child),
        ],
      ),
    );
  }
}

class _DesktopBody extends StatelessWidget {
  final Widget child;

  const _DesktopBody({
    Key? key,
    required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Container(
      width: size.width,
      height: size.height,
      color: Colors.white,
      child: Row(
        children: [
          const Background(),
          SizedBox(
            width: size.width * .6,
            height: double.infinity,
            child: Column(
              children: [
                Text(
                  'Inicio de sesión',
                  style: GoogleFonts.roboto(
                      fontSize: 30,
                      color: const Color(0xff49454F),
                      fontWeight: FontWeight.bold),
                ),
                const SizedBox(
                  height: 50,
                ),
                Expanded(child: child),
              ],
            ),
          )
        ],
      ),
    );
  }
}
