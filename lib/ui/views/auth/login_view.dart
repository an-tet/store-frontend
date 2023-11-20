import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:store/constants/colors_constants.dart';
import 'package:store/provider/auth_provider.dart';
import 'package:store/provider/login_form_provider.dart';
import 'package:store/router/router_manager.dart';
import 'package:store/ui/buttons/custom_outlined_button.dart';
import 'package:store/ui/buttons/link_text.dart';
import 'package:store/ui/inputs/custom_inputs.dart';
import 'package:store/ui/views/auth/login_form_validation.dart';

class LoginView extends StatelessWidget {
  const LoginView({super.key});

  @override
  Widget build(BuildContext context) {
    final authProvider = Provider.of<AuthProvider>(context);

    return ChangeNotifierProvider(
      create: (BuildContext _) => LoginFormProvider(),
      child: Builder(
        builder: (context) {
          final loginFormProvider =
              Provider.of<LoginFormProvider>(context, listen: false);
          return Container(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 370),
                child: Form(
                  autovalidateMode: AutovalidateMode.always,
                  key: loginFormProvider.formKey,
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
                        onChanged: (value) => loginFormProvider.user = value,
                        decoration: CustomDecorationInput.loginInputDecoration(
                          hint: 'Ingrese nombre de usuario',
                          label: 'Usuario',
                          icon: Icons.person_2_outlined,
                        ),
                        validator: (value) =>
                            LoginFormValidation.loginValidation(
                                value, 'Usuario'),
                      ),
                      const SizedBox(height: 20),
                      TextFormField(
                        onChanged: (value) =>
                            loginFormProvider.password = value,
                        validator: (value) =>
                            LoginFormValidation.loginValidation(
                                value, 'Contraseña'),
                        obscureText: true,
                        style: const TextStyle(color: ColorsConstants.primary),
                        decoration: CustomDecorationInput.loginInputDecoration(
                          hint: '*********',
                          label: 'Contraseña',
                          icon: Icons.lock_outline_rounded,
                        ),
                      ),
                      const SizedBox(height: 20),
                      CustomOutlinedButton(
                        onPressed: () {
                          final isValid = loginFormProvider.validateForm();
                          if (isValid) {
                            authProvider.login(
                              loginFormProvider.user,
                              loginFormProvider.password,
                            );
                          }
                        },
                        text: 'Ingresar',
                      ),
                      const SizedBox(height: 20),
                      SizedBox(
                        width: double.infinity,
                        child: LinkText(
                          text: 'Recuperar credenciales',
                          align: TextAlign.end,
                          onPressed: () {
                            Navigator.pushNamed(
                                context, RouterManager.recoveryRoute);
                          },
                        ),
                      )
                    ],
                  ),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
