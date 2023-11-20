import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:store/constants/colors_constants.dart';
import 'package:store/provider/user_modify_form_provider.dart';
import 'package:store/ui/buttons/custom_button.dart';
import 'package:store/ui/buttons/custom_dropdown_button.dart';
import 'package:store/ui/buttons/custom_outlined_button.dart';
import 'package:store/ui/inputs/custom_inputs.dart';

class UsersEditView extends StatelessWidget {
  const UsersEditView({super.key});

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
        Padding(
          padding: const EdgeInsets.only(bottom: 40),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              IconButton(
                onPressed: () => Navigator.pop(context),
                icon: const Icon(Icons.arrow_back_ios),
                splashRadius: 20,
                tooltip: 'Volver',
                color: ColorsConstants.primary,
              ),
            ],
          ),
        ),
        ChangeNotifierProvider(
          create: (BuildContext context) => UserEditFormProvider(),
          child: Builder(
            builder: (_) {
              final usersEditFormProvider =
                  Provider.of<UserEditFormProvider>(context, listen: false);
              return Form(
                autovalidateMode: AutovalidateMode.always,
                child: Column(
                  children: [
                    Wrap(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(8),
                          child: CustomDropdownButton(
                            list: documentTypeList,
                            onSelected: (documentType) => usersEditFormProvider
                                .documentType = documentType,
                          ),
                        ),
                        ConstrainedBox(
                          constraints: BoxConstraints(
                            maxWidth: size.width > 540
                                ? size.width * 0.25
                                : size.width,
                          ),
                          child: Padding(
                            padding: const EdgeInsets.all(8),
                            child: TextFormField(
                              style: const TextStyle(
                                  color: ColorsConstants.primary),
                              onChanged: (document) => usersEditFormProvider
                                  .documentNumber = document,
                              decoration: CustomDecorationInput
                                  .normalTextInputDecoration(
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
                              onSelected: (rol) =>
                                  usersEditFormProvider.rol = rol),
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
                            maxWidth: size.width > 540
                                ? size.width * 0.25
                                : size.width,
                          ),
                          child: Padding(
                            padding: const EdgeInsets.all(8),
                            child: TextFormField(
                              style: const TextStyle(
                                  color: ColorsConstants.primary),
                              onChanged: (firstName) =>
                                  usersEditFormProvider.firstName = firstName,
                              decoration: CustomDecorationInput
                                  .normalTextInputDecoration(
                                hint: 'Primer nombre',
                                label: 'Primero nombre',
                              ),
                            ),
                          ),
                        ),
                        ConstrainedBox(
                          constraints: BoxConstraints(
                            maxWidth: size.width > 540
                                ? size.width * 0.25
                                : size.width,
                          ),
                          child: Padding(
                            padding: const EdgeInsets.all(8),
                            child: TextFormField(
                              style: const TextStyle(
                                  color: ColorsConstants.primary),
                              onChanged: (middleName) =>
                                  usersEditFormProvider.middleName = middleName,
                              decoration: CustomDecorationInput
                                  .normalTextInputDecoration(
                                hint: 'Segundo nombre',
                                label: 'Segundo nombre',
                              ),
                            ),
                          ),
                        ),
                        ConstrainedBox(
                          constraints: BoxConstraints(
                            maxWidth: size.width > 540
                                ? size.width * 0.25
                                : size.width,
                          ),
                          child: Padding(
                            padding: const EdgeInsets.all(8),
                            child: TextFormField(
                              style: const TextStyle(
                                  color: ColorsConstants.primary),
                              onChanged: (lastName) =>
                                  usersEditFormProvider.lastName = lastName,
                              decoration: CustomDecorationInput
                                  .normalTextInputDecoration(
                                hint: 'Primer apellido',
                                label: 'Primer apellido',
                              ),
                            ),
                          ),
                        ),
                        ConstrainedBox(
                          constraints: BoxConstraints(
                            maxWidth: size.width > 540
                                ? size.width * 0.25
                                : size.width,
                          ),
                          child: Padding(
                            padding: const EdgeInsets.all(8),
                            child: TextFormField(
                              style: const TextStyle(
                                  color: ColorsConstants.primary),
                              onChanged: (secondLastName) =>
                                  usersEditFormProvider.secondLastName =
                                      secondLastName,
                              decoration: CustomDecorationInput
                                  .normalTextInputDecoration(
                                hint: 'Segundo apellido',
                                label: 'Segundo apellido',
                              ),
                            ),
                          ),
                        ),
                        ConstrainedBox(
                          constraints: BoxConstraints(
                            maxWidth: size.width > 540
                                ? size.width * 0.25
                                : size.width,
                          ),
                          child: Padding(
                            padding: const EdgeInsets.all(8),
                            child: TextFormField(
                              style: const TextStyle(
                                  color: ColorsConstants.primary),
                              onChanged: (email) =>
                                  usersEditFormProvider.email = email,
                              decoration: CustomDecorationInput
                                  .normalTextInputDecoration(
                                hint: 'Correo electrónico',
                                label: 'Correo electrónico',
                              ),
                            ),
                          ),
                        ),
                        ConstrainedBox(
                          constraints: BoxConstraints(
                            maxWidth: size.width > 540
                                ? size.width * 0.25
                                : size.width,
                          ),
                          child: Padding(
                            padding: const EdgeInsets.all(8),
                            child: TextFormField(
                              style: const TextStyle(
                                  color: ColorsConstants.primary),
                              onChanged: (contact) =>
                                  usersEditFormProvider.contact = contact,
                              decoration: CustomDecorationInput
                                  .normalTextInputDecoration(
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
                                usersEditFormProvider.skirtSize = skirt,
                          ),
                        ),
                        ConstrainedBox(
                          constraints: BoxConstraints(
                            maxWidth: size.width > 540
                                ? size.width * 0.25
                                : size.width,
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
                                ).then((value) => usersEditFormProvider
                                    .birthDate = value.toString())
                              },
                              style: const TextStyle(
                                  color: ColorsConstants.primary),
                              readOnly: true,
                              decoration: CustomDecorationInput
                                  .normalTextInputDecoration(
                                hint: 'Fecha de nacimiento',
                                label: 'Fecha de nacimiento',
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                    Padding(
                      padding: EdgeInsets.only(top: size.height * 0.10),
                      child: CustomOutlinedButton(
                        onPressed: () {},
                        text: 'Crear',
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
