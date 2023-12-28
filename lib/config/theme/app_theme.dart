import 'package:flutter/material.dart';
import 'package:store/constants/colors_constants.dart';

class AppTheme {
  ThemeData get themeLight => ThemeData(
        useMaterial3: true,
        colorScheme: const ColorScheme(
          primary: ColorsConstants.primaryLight,
          secondary: ColorsConstants.secondaryLight,
          tertiary: ColorsConstants.tertiaryLight,
          error: ColorsConstants.errorLight,
          background: ColorsConstants.backgroundLight,
          outline: ColorsConstants.outlineLight,
          onPrimary: ColorsConstants.onPrimaryLight,
          onSecondary: ColorsConstants.onSecondaryLight,
          onTertiary: ColorsConstants.onTertiaryLight,
          onError: ColorsConstants.errorLight,
          onBackground: ColorsConstants.onBackgroundLight,
          primaryContainer: ColorsConstants.primaryContainerLight,
          secondaryContainer: ColorsConstants.secondaryContainerLight,
          tertiaryContainer: ColorsConstants.tertiaryContainerLight,
          errorContainer: ColorsConstants.errorContainerLight,
          surface: ColorsConstants.surfaceLight,
          surfaceVariant: ColorsConstants.surfaceVariantLight,
          onPrimaryContainer: ColorsConstants.onPrimaryContainerLight,
          onSecondaryContainer: ColorsConstants.onSecondaryContainerLight,
          onTertiaryContainer: ColorsConstants.onTertiaryContainerLight,
          onErrorContainer: ColorsConstants.onErrorContainerLight,
          onSurface: ColorsConstants.onSurfaceLight,
          onSurfaceVariant: ColorsConstants.onSurfaceVariantLight,
          brightness: Brightness.light,
        ),
      );

  ThemeData get themeDark => ThemeData(
        useMaterial3: true,
        colorScheme: const ColorScheme(
          primary: ColorsConstants.primaryDark,
          secondary: ColorsConstants.secondaryDark,
          tertiary: ColorsConstants.tertiaryDark,
          error: ColorsConstants.errorDark,
          background: ColorsConstants.backgroundDark,
          outline: ColorsConstants.outlineDark,
          onPrimary: ColorsConstants.onPrimaryDark,
          onSecondary: ColorsConstants.onSecondaryDark,
          onTertiary: ColorsConstants.onTertiaryDark,
          onError: ColorsConstants.errorDark,
          onBackground: ColorsConstants.onBackgroundDark,
          primaryContainer: ColorsConstants.primaryContainerDark,
          secondaryContainer: ColorsConstants.secondaryContainerDark,
          tertiaryContainer: ColorsConstants.tertiaryContainerDark,
          errorContainer: ColorsConstants.errorContainerDark,
          surface: ColorsConstants.surfaceDark,
          surfaceVariant: ColorsConstants.surfaceVariantDark,
          onPrimaryContainer: ColorsConstants.onPrimaryContainerDark,
          onSecondaryContainer: ColorsConstants.onSecondaryContainerDark,
          onTertiaryContainer: ColorsConstants.onTertiaryContainerDark,
          onErrorContainer: ColorsConstants.onErrorContainerDark,
          onSurface: ColorsConstants.onSurfaceDark,
          onSurfaceVariant: ColorsConstants.onSurfaceVariantDark,
          brightness: Brightness.dark,
        ),
      );
}
