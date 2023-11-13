import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:store/constants/colors_constants.dart';
import 'package:store/router/router_manager.dart';
import 'package:store/ui/buttons/custom_outlined_button.dart';
import 'package:store/ui/buttons/link_text.dart';
import 'package:store/ui/inputs/custom_inputs.dart';

class LoginView extends StatelessWidget {
  const LoginView({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 370),
          child: Form(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  'Inicio de sesión',
                  style: GoogleFonts.roboto(
                    fontSize: 30,
                    color: ColorsConstants.primary,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 50),
                TextFormField(
                  style: const TextStyle(color: ColorsConstants.primary),
                  decoration: CustomInputs.loginInputDecoration(
                    hint: 'Ingrese su usuario',
                    label: 'User',
                    icon: Icons.person_2_outlined,
                  ),
                ),
                const SizedBox(height: 20),
                TextFormField(
                  obscureText: true,
                  style: const TextStyle(color: ColorsConstants.primary),
                  decoration: CustomInputs.loginInputDecoration(
                    hint: '*********',
                    label: 'Contraseña',
                    icon: Icons.lock_outline_rounded,
                  ),
                ),
                const SizedBox(height: 20),
                CustomOutlinedButton(
                  onPressed: () {},
                  text: 'Ingresar',
                ),
                const SizedBox(height: 20),
                SizedBox(
                  width: double.infinity,
                  child: LinkText(
                    text: 'Recuperar credenciales',
                    align: TextAlign.end,
                    onPressed: () {
                      Navigator.pushNamed(context, RouterManager.registerRoute);
                    },
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
