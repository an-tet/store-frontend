import 'package:flutter/material.dart';
import 'package:store/constants/colors_constants.dart';
import 'package:store/datatables/users_datasource.dart';
import 'package:store/router/router_manager.dart';
import 'package:store/services/navigation_service.dart';
import 'package:store/ui/buttons/custom_button.dart';
import 'package:store/ui/shared/widgets/search_input.dart';

class UsersListView extends StatefulWidget {
  const UsersListView({super.key});

  @override
  State<UsersListView> createState() => _UsersListViewState();
}

class _UsersListViewState extends State<UsersListView> {
  int _rowsPerPage = PaginatedDataTable.defaultRowsPerPage;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(15),
      child: ListView(
        physics: const ClampingScrollPhysics(),
        children: [
          const SizedBox(height: 50),
          if (MediaQuery.of(context).size.width > 600) _desktopSize(context),
          if (MediaQuery.of(context).size.width <= 600) _mobileSize(),
          const SizedBox(height: 50),
          PaginatedDataTable(
            showFirstLastButtons: true,
            arrowHeadColor: ColorsConstants.primary,
            columns: getTableColumns(),
            source: UsersDataSource(),
            onRowsPerPageChanged: (value) => setState(() {
              _rowsPerPage = value ?? 10;
            }),
            rowsPerPage: _rowsPerPage,
          )
        ],
      ),
    );
  }

  Padding _mobileSize() {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              SizedBox(
                width: 57,
                height: 30,
                child: Tooltip(
                  message: 'Crear',
                  child: CustomButton(
                    onPressed: () => NavigationService.navigateTo(
                        RouterManager.usersCreateRoute),
                    icon: Icons.add,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 20),
          const SearchInput(),
        ],
      ),
    );
  }

  Row _desktopSize(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        SizedBox(
          width: MediaQuery.of(context).size.width * 0.5,
          child: const SearchInput(),
        ),
        Tooltip(
          message: 'Crear',
          child: CustomButton(
            onPressed: () =>
                NavigationService.navigateTo(RouterManager.usersCreateRoute),
            icon: Icons.add,
          ),
        )
      ],
    );
  }

  List<DataColumn> getTableColumns() {
    return const [
      DataColumn(label: Text('#')),
      DataColumn(label: Text('Tipo de documento')),
      DataColumn(label: Text('Numero de documento')),
      DataColumn(label: Text('Nombre completo')),
      DataColumn(label: Text('Tipo de usuario')),
      DataColumn(label: Text('Estado')),
      DataColumn(label: Text('Email')),
      DataColumn(label: Text('Fecha de nacimiento')),
      DataColumn(label: Text('Teléfono')),
      DataColumn(label: Text('acciones')),
    ];
  }
}
