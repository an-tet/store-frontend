import 'package:flutter/material.dart';
import 'package:store/ui/layouts/auth/widgets/background.dart';

class AuthLayout extends StatelessWidget {
  final Widget child;

  const AuthLayout({
    Key? key,
    required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Scaffold(
      body: Scrollbar(
        trackVisibility: true,
        child: ListView(
          physics: const ClampingScrollPhysics(),
          children: [
            size.width > 1000
                ? _DesktopBody(child: child)
                : _MobileBody(child: child),
          ],
        ),
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

class _MobileBody extends StatelessWidget {
  final Widget child;
  const _MobileBody({
    Key? key,
    required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Container(
      color: Colors.white,
      child: Column(
        children: [
          SizedBox(
            width: double.infinity,
            height: size.height,
            child: child,
          ),
        ],
      ),
    );
  }
}
