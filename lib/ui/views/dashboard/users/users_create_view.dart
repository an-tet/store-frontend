import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:store/constants/colors_constants.dart';
import 'package:store/provider/user_create_form_provider.dart';
import 'package:store/ui/buttons/custom_button.dart';
import 'package:store/ui/buttons/custom_dropdown_button.dart';
import 'package:store/ui/inputs/custom_inputs.dart';

class UsersCreateView extends StatelessWidget {
  const UsersCreateView({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    const List<String> rolList = <String>[
      'Rol',
      'Administrador',
      'Vendedor',
      'Cliente'
    ];
    const List<String> documentTypeList = <String>[
      'Tipo documento',
      'Cédula',
      'Pasaporte',
      'Cédula extranjería'
    ];

    const List<String> skirtSizeList = <String>[
      'Talla',
      'XS',
      'S',
      'M',
      'L',
      'XL',
      'XXL'
    ];

    return ListView(
      physics: const ClampingScrollPhysics(),
      children: [
        ChangeNotifierProvider(
          create: (BuildContext context) => UserCreateFormProvider(),
          child: Builder(
            builder: (_) {
              final loginFormProvider =
                  Provider.of<UserCreateFormProvider>(context, listen: false);
              return Form(
                autovalidateMode: AutovalidateMode.always,
                child: Wrap(
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(8),
                      child: CustomDropdownButton(
                        list: documentTypeList,
                        onSelected: (documentType) =>
                            loginFormProvider.documentType = documentType,
                      ),
                    ),
                    ConstrainedBox(
                      constraints: BoxConstraints(
                        maxWidth:
                            size.width > 540 ? size.width * 0.25 : size.width,
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(8),
                        child: TextFormField(
                          style:
                              const TextStyle(color: ColorsConstants.primary),
                          onChanged: (document) =>
                              loginFormProvider.documentNumber = document,
                          decoration:
                              CustomDecorationInput.normalTextInputDecoration(
                            hint: 'Documento',
                            label: 'Documento',
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8),
                      child: CustomDropdownButton(
                          list: rolList,
                          onSelected: (rol) => loginFormProvider.rol = rol),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8),
                      child: SizedBox(
                        height: 40,
                        width: 60,
                        child: Tooltip(
                          message: 'Crear',
                          child: CustomButton(
                            onPressed: () => {},
                            icon: Icons.add,
                          ),
                        ),
                      ),
                    ),
                    ConstrainedBox(
                      constraints: BoxConstraints(
                        maxWidth:
                            size.width > 540 ? size.width * 0.25 : size.width,
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(8),
                        child: TextFormField(
                          style:
                              const TextStyle(color: ColorsConstants.primary),
                          onChanged: (firstName) =>
                              loginFormProvider.firstName = firstName,
                          decoration:
                              CustomDecorationInput.normalTextInputDecoration(
                            hint: 'Primer nombre',
                            label: 'Primero nombre',
                          ),
                        ),
                      ),
                    ),
                    ConstrainedBox(
                      constraints: BoxConstraints(
                        maxWidth:
                            size.width > 540 ? size.width * 0.25 : size.width,
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(8),
                        child: TextFormField(
                          style:
                              const TextStyle(color: ColorsConstants.primary),
                          onChanged: (middleName) =>
                              loginFormProvider.middleName = middleName,
                          decoration:
                              CustomDecorationInput.normalTextInputDecoration(
                            hint: 'Segundo nombre',
                            label: 'Segundo nombre',
                          ),
                        ),
                      ),
                    ),
                    ConstrainedBox(
                      constraints: BoxConstraints(
                        maxWidth:
                            size.width > 540 ? size.width * 0.25 : size.width,
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(8),
                        child: TextFormField(
                          style:
                              const TextStyle(color: ColorsConstants.primary),
                          onChanged: (lastName) =>
                              loginFormProvider.lastName = lastName,
                          decoration:
                              CustomDecorationInput.normalTextInputDecoration(
                            hint: 'Primer apellido',
                            label: 'Primer apellido',
                          ),
                        ),
                      ),
                    ),
                    ConstrainedBox(
                      constraints: BoxConstraints(
                        maxWidth:
                            size.width > 540 ? size.width * 0.25 : size.width,
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(8),
                        child: TextFormField(
                          style:
                              const TextStyle(color: ColorsConstants.primary),
                          onChanged: (secondLastName) =>
                              loginFormProvider.secondLastName = secondLastName,
                          decoration:
                              CustomDecorationInput.normalTextInputDecoration(
                            hint: 'Segundo apellido',
                            label: 'Segundo apellido',
                          ),
                        ),
                      ),
                    ),
                    ConstrainedBox(
                      constraints: BoxConstraints(
                        maxWidth:
                            size.width > 540 ? size.width * 0.25 : size.width,
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(8),
                        child: TextFormField(
                          style:
                              const TextStyle(color: ColorsConstants.primary),
                          onChanged: (email) => loginFormProvider.email = email,
                          decoration:
                              CustomDecorationInput.normalTextInputDecoration(
                            hint: 'Correo electrónico',
                            label: 'Correo electrónico',
                          ),
                        ),
                      ),
                    ),
                    ConstrainedBox(
                      constraints: BoxConstraints(
                        maxWidth:
                            size.width > 540 ? size.width * 0.25 : size.width,
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(8),
                        child: TextFormField(
                          style:
                              const TextStyle(color: ColorsConstants.primary),
                          onChanged: (contact) =>
                              loginFormProvider.contact = contact,
                          decoration:
                              CustomDecorationInput.normalTextInputDecoration(
                            hint: 'Contacto',
                            label: 'Contacto',
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8),
                      child: CustomDropdownButton(
                        list: skirtSizeList,
                        onSelected: (skirt) =>
                            loginFormProvider.skirtSize = skirt,
                      ),
                    ),
                    ConstrainedBox(
                      constraints: BoxConstraints(
                        maxWidth:
                            size.width > 540 ? size.width * 0.25 : size.width,
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(8),
                        child: TextFormField(
                          onTap: () async => {
                            await showDatePicker(
                              context: context,
                              initialDate: DateTime.now(),
                              firstDate: DateTime(1900),
                              lastDate: DateTime.now(),
                            ).then((value) =>
                                loginFormProvider.birthDate = value.toString())
                          },
                          style:
                              const TextStyle(color: ColorsConstants.primary),
                          readOnly: true,
                          decoration:
                              CustomDecorationInput.normalTextInputDecoration(
                            hint: 'Fecha de nacimiento',
                            label: 'Fecha de nacimiento',
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              );
            },
          ),
        )
      ],
    );
  }
}
