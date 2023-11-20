import 'package:flutter/material.dart';
import 'package:store/constants/colors_constants.dart';
import 'package:store/router/router_manager.dart';
import 'package:store/services/navigation_service.dart';

class UsersDataSource extends DataTableSource {
  final List<DataCell> dataCellList = [
    const DataCell(Text('id')),
    const DataCell(Text('documentType')),
    const DataCell(Text('documentNumber')),
    const DataCell(Text('fullName')),
    const DataCell(Text('type')),
    const DataCell(Text('status')),
    const DataCell(Text('email')),
    const DataCell(Text('birthDate')),
    const DataCell(Text('phone')),
    DataCell(
      Row(
        children: [
          IconButton(
            onPressed: () =>
                NavigationService.navigateTo(RouterManager.usersEditRoute),
            icon: const Icon(Icons.edit_outlined),
            color: ColorsConstants.tertiary,
            tooltip: 'Editar',
            splashRadius: 20,
          ),
          IconButton(
            onPressed: () => {},
            tooltip: 'Desactivar',
            icon: const Icon(Icons.delete_outline),
            color: ColorsConstants.error,
            splashRadius: 20,
          )
        ],
      ),
    ),
  ];

  @override
  DataRow? getRow(int index) {
    return DataRow.byIndex(
      index: index,
      cells: dataCellList,
      color: rowColor(index),
    );
  }

  @override
  bool get isRowCountApproximate => true;

  @override
  int get rowCount => 100;

  @override
  int get selectedRowCount => 0;

  MaterialStateProperty<Color> rowColor(int index) {
    return MaterialStateProperty.resolveWith<Color>(
        (Set<MaterialState> states) {
      if (index % 2 == 0) {
        return ColorsConstants.neutral
            .withOpacity(0.1); // Color para filas pares
      }
      return Colors.white; // Usa el color predeterminado para filas impares
    });
  }
}
