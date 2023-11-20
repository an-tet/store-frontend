import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:store/constants/colors_constants.dart';
import 'package:store/router/router_manager.dart';
import 'package:store/ui/buttons/custom_outlined_button.dart';
import 'package:store/ui/buttons/link_text.dart';
import 'package:store/ui/inputs/custom_inputs.dart';

class RecoveryView extends StatelessWidget {
  const RecoveryView({super.key});

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
                  'Recuperación de credenciales',
                  style: GoogleFonts.roboto(
                    fontSize: 30,
                    color: ColorsConstants.primary,
                    fontWeight: FontWeight.bold,
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 50),
                TextFormField(
                  style: const TextStyle(color: ColorsConstants.primary),
                  decoration: CustomDecorationInput.loginInputDecoration(
                    hint: 'Ingrese nombre de usuario',
                    label: 'Usuario',
                    icon: Icons.person_outlined,
                  ),
                ),
                const SizedBox(height: 20),
                CustomOutlinedButton(
                  onPressed: () {},
                  text: 'Recuperar',
                ),
                const SizedBox(height: 20),
                SizedBox(
                    width: double.infinity,
                    child: Row(
                      children: [
                        const Icon(Icons.arrow_back),
                        LinkText(
                          text: 'Recuperar credenciales',
                          align: TextAlign.start,
                          onPressed: () {
                            Navigator.pushNamed(
                                context, RouterManager.loginRoute);
                          },
                        ),
                      ],
                    ))
              ],
            ),
          ),
        ),
      ),
    );
  }
}
