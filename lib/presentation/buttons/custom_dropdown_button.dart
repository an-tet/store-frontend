import 'package:flutter/material.dart';

class CustomDropdownButton extends StatefulWidget {
  final List<String> list;
  final Function onSelected;
  const CustomDropdownButton(
      {super.key, required this.list, required this.onSelected});

  @override
  State<CustomDropdownButton> createState() => _CustomDropdownButtonState();
}

class _CustomDropdownButtonState extends State<CustomDropdownButton> {
  String dropdownValue = '';
  @override
  void initState() {
    super.initState();
    dropdownValue = widget.list.first;
  }

  @override
  Widget build(BuildContext context) {
    return DropdownMenu<String>(
      label: Text(dropdownValue),
      initialSelection: widget.list.first,
      onSelected: (String? value) {
        setState(() {
          dropdownValue = value!;
        });
      },
      dropdownMenuEntries:
          widget.list.map<DropdownMenuEntry<String>>((String value) {
        return DropdownMenuEntry<String>(value: value, label: value);
      }).toList(),
    );
  }
}
