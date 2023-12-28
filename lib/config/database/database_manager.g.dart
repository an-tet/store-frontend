// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'database_manager.dart';

// ignore_for_file: type=lint
class User extends Table with TableInfo<User, UserData> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  User(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  late final GeneratedColumn<int> id = GeneratedColumn<int>(
      'id', aliasedName, false,
      type: DriftSqlType.int,
      requiredDuringInsert: false,
      $customConstraints: 'NOT NULL PRIMARY KEY');
  static const VerificationMeta _usernameMeta =
      const VerificationMeta('username');
  late final GeneratedColumn<String> username = GeneratedColumn<String>(
      'username', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _passwordMeta =
      const VerificationMeta('password');
  late final GeneratedColumn<String> password = GeneratedColumn<String>(
      'password', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _statusMeta = const VerificationMeta('status');
  late final GeneratedColumn<bool> status = GeneratedColumn<bool>(
      'status', aliasedName, false,
      type: DriftSqlType.bool,
      requiredDuringInsert: false,
      $customConstraints: 'NOT NULL DEFAULT TRUE',
      defaultValue: const CustomExpression('TRUE'));
  @override
  List<GeneratedColumn> get $columns => [id, username, password, status];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'user';
  @override
  VerificationContext validateIntegrity(Insertable<UserData> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('username')) {
      context.handle(_usernameMeta,
          username.isAcceptableOrUnknown(data['username']!, _usernameMeta));
    } else if (isInserting) {
      context.missing(_usernameMeta);
    }
    if (data.containsKey('password')) {
      context.handle(_passwordMeta,
          password.isAcceptableOrUnknown(data['password']!, _passwordMeta));
    } else if (isInserting) {
      context.missing(_passwordMeta);
    }
    if (data.containsKey('status')) {
      context.handle(_statusMeta,
          status.isAcceptableOrUnknown(data['status']!, _statusMeta));
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  UserData map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return UserData(
      id: attachedDatabase.typeMapping
          .read(DriftSqlType.int, data['${effectivePrefix}id'])!,
      username: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}username'])!,
      password: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}password'])!,
      status: attachedDatabase.typeMapping
          .read(DriftSqlType.bool, data['${effectivePrefix}status'])!,
    );
  }

  @override
  User createAlias(String alias) {
    return User(attachedDatabase, alias);
  }

  @override
  bool get dontWriteConstraints => true;
}

class UserData extends DataClass implements Insertable<UserData> {
  final int id;
  final String username;
  final String password;
  final bool status;
  const UserData(
      {required this.id,
      required this.username,
      required this.password,
      required this.status});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['username'] = Variable<String>(username);
    map['password'] = Variable<String>(password);
    map['status'] = Variable<bool>(status);
    return map;
  }

  UserCompanion toCompanion(bool nullToAbsent) {
    return UserCompanion(
      id: Value(id),
      username: Value(username),
      password: Value(password),
      status: Value(status),
    );
  }

  factory UserData.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return UserData(
      id: serializer.fromJson<int>(json['id']),
      username: serializer.fromJson<String>(json['username']),
      password: serializer.fromJson<String>(json['password']),
      status: serializer.fromJson<bool>(json['status']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'username': serializer.toJson<String>(username),
      'password': serializer.toJson<String>(password),
      'status': serializer.toJson<bool>(status),
    };
  }

  UserData copyWith(
          {int? id, String? username, String? password, bool? status}) =>
      UserData(
        id: id ?? this.id,
        username: username ?? this.username,
        password: password ?? this.password,
        status: status ?? this.status,
      );
  @override
  String toString() {
    return (StringBuffer('UserData(')
          ..write('id: $id, ')
          ..write('username: $username, ')
          ..write('password: $password, ')
          ..write('status: $status')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, username, password, status);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is UserData &&
          other.id == this.id &&
          other.username == this.username &&
          other.password == this.password &&
          other.status == this.status);
}

class UserCompanion extends UpdateCompanion<UserData> {
  final Value<int> id;
  final Value<String> username;
  final Value<String> password;
  final Value<bool> status;
  const UserCompanion({
    this.id = const Value.absent(),
    this.username = const Value.absent(),
    this.password = const Value.absent(),
    this.status = const Value.absent(),
  });
  UserCompanion.insert({
    this.id = const Value.absent(),
    required String username,
    required String password,
    this.status = const Value.absent(),
  })  : username = Value(username),
        password = Value(password);
  static Insertable<UserData> custom({
    Expression<int>? id,
    Expression<String>? username,
    Expression<String>? password,
    Expression<bool>? status,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (username != null) 'username': username,
      if (password != null) 'password': password,
      if (status != null) 'status': status,
    });
  }

  UserCompanion copyWith(
      {Value<int>? id,
      Value<String>? username,
      Value<String>? password,
      Value<bool>? status}) {
    return UserCompanion(
      id: id ?? this.id,
      username: username ?? this.username,
      password: password ?? this.password,
      status: status ?? this.status,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (username.present) {
      map['username'] = Variable<String>(username.value);
    }
    if (password.present) {
      map['password'] = Variable<String>(password.value);
    }
    if (status.present) {
      map['status'] = Variable<bool>(status.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('UserCompanion(')
          ..write('id: $id, ')
          ..write('username: $username, ')
          ..write('password: $password, ')
          ..write('status: $status')
          ..write(')'))
        .toString();
  }
}

class UserInfo extends Table with TableInfo<UserInfo, UserInfoData> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  UserInfo(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  late final GeneratedColumn<int> id = GeneratedColumn<int>(
      'id', aliasedName, false,
      type: DriftSqlType.int,
      requiredDuringInsert: false,
      $customConstraints: 'PRIMARY KEY');
  static const VerificationMeta _documentTypeMeta =
      const VerificationMeta('documentType');
  late final GeneratedColumn<String> documentType = GeneratedColumn<String>(
      'documentType', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _dniMeta = const VerificationMeta('dni');
  late final GeneratedColumn<String> dni = GeneratedColumn<String>(
      'dni', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _fullNameMeta =
      const VerificationMeta('fullName');
  late final GeneratedColumn<String> fullName = GeneratedColumn<String>(
      'fullName', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _emailMeta = const VerificationMeta('email');
  late final GeneratedColumn<String> email = GeneratedColumn<String>(
      'email', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _birthdayMeta =
      const VerificationMeta('birthday');
  late final GeneratedColumn<DateTime> birthday = GeneratedColumn<DateTime>(
      'birthday', aliasedName, false,
      type: DriftSqlType.dateTime,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _phoneMeta = const VerificationMeta('phone');
  late final GeneratedColumn<String> phone = GeneratedColumn<String>(
      'phone', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _statusMeta = const VerificationMeta('status');
  late final GeneratedColumn<bool> status = GeneratedColumn<bool>(
      'status', aliasedName, false,
      type: DriftSqlType.bool,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _typeMeta = const VerificationMeta('type');
  late final GeneratedColumn<String> type = GeneratedColumn<String>(
      'type', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: false,
      $customConstraints:
          'NOT NULL DEFAULT \'CLIENT\' CHECK (type IN (\'CLIENT\', \'ADMIN\', \'SELLER\'))',
      defaultValue: const CustomExpression('\'CLIENT\''));
  static const VerificationMeta _userIdMeta = const VerificationMeta('userId');
  late final GeneratedColumn<int> userId = GeneratedColumn<int>(
      'user_id', aliasedName, true,
      type: DriftSqlType.int,
      requiredDuringInsert: false,
      $customConstraints: '');
  @override
  List<GeneratedColumn> get $columns => [
        id,
        documentType,
        dni,
        fullName,
        email,
        birthday,
        phone,
        status,
        type,
        userId
      ];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'user_info';
  @override
  VerificationContext validateIntegrity(Insertable<UserInfoData> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('documentType')) {
      context.handle(
          _documentTypeMeta,
          documentType.isAcceptableOrUnknown(
              data['documentType']!, _documentTypeMeta));
    } else if (isInserting) {
      context.missing(_documentTypeMeta);
    }
    if (data.containsKey('dni')) {
      context.handle(
          _dniMeta, dni.isAcceptableOrUnknown(data['dni']!, _dniMeta));
    } else if (isInserting) {
      context.missing(_dniMeta);
    }
    if (data.containsKey('fullName')) {
      context.handle(_fullNameMeta,
          fullName.isAcceptableOrUnknown(data['fullName']!, _fullNameMeta));
    } else if (isInserting) {
      context.missing(_fullNameMeta);
    }
    if (data.containsKey('email')) {
      context.handle(
          _emailMeta, email.isAcceptableOrUnknown(data['email']!, _emailMeta));
    } else if (isInserting) {
      context.missing(_emailMeta);
    }
    if (data.containsKey('birthday')) {
      context.handle(_birthdayMeta,
          birthday.isAcceptableOrUnknown(data['birthday']!, _birthdayMeta));
    } else if (isInserting) {
      context.missing(_birthdayMeta);
    }
    if (data.containsKey('phone')) {
      context.handle(
          _phoneMeta, phone.isAcceptableOrUnknown(data['phone']!, _phoneMeta));
    } else if (isInserting) {
      context.missing(_phoneMeta);
    }
    if (data.containsKey('status')) {
      context.handle(_statusMeta,
          status.isAcceptableOrUnknown(data['status']!, _statusMeta));
    } else if (isInserting) {
      context.missing(_statusMeta);
    }
    if (data.containsKey('type')) {
      context.handle(
          _typeMeta, type.isAcceptableOrUnknown(data['type']!, _typeMeta));
    }
    if (data.containsKey('user_id')) {
      context.handle(_userIdMeta,
          userId.isAcceptableOrUnknown(data['user_id']!, _userIdMeta));
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  UserInfoData map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return UserInfoData(
      id: attachedDatabase.typeMapping
          .read(DriftSqlType.int, data['${effectivePrefix}id'])!,
      documentType: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}documentType'])!,
      dni: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}dni'])!,
      fullName: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}fullName'])!,
      email: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}email'])!,
      birthday: attachedDatabase.typeMapping
          .read(DriftSqlType.dateTime, data['${effectivePrefix}birthday'])!,
      phone: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}phone'])!,
      status: attachedDatabase.typeMapping
          .read(DriftSqlType.bool, data['${effectivePrefix}status'])!,
      type: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}type'])!,
      userId: attachedDatabase.typeMapping
          .read(DriftSqlType.int, data['${effectivePrefix}user_id']),
    );
  }

  @override
  UserInfo createAlias(String alias) {
    return UserInfo(attachedDatabase, alias);
  }

  @override
  List<String> get customConstraints =>
      const ['FOREIGN KEY(user_id)REFERENCES user(id)'];
  @override
  bool get dontWriteConstraints => true;
}

class UserInfoData extends DataClass implements Insertable<UserInfoData> {
  final int id;
  final String documentType;
  final String dni;
  final String fullName;
  final String email;
  final DateTime birthday;
  final String phone;
  final bool status;
  final String type;
  final int? userId;
  const UserInfoData(
      {required this.id,
      required this.documentType,
      required this.dni,
      required this.fullName,
      required this.email,
      required this.birthday,
      required this.phone,
      required this.status,
      required this.type,
      this.userId});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['documentType'] = Variable<String>(documentType);
    map['dni'] = Variable<String>(dni);
    map['fullName'] = Variable<String>(fullName);
    map['email'] = Variable<String>(email);
    map['birthday'] = Variable<DateTime>(birthday);
    map['phone'] = Variable<String>(phone);
    map['status'] = Variable<bool>(status);
    map['type'] = Variable<String>(type);
    if (!nullToAbsent || userId != null) {
      map['user_id'] = Variable<int>(userId);
    }
    return map;
  }

  UserInfoCompanion toCompanion(bool nullToAbsent) {
    return UserInfoCompanion(
      id: Value(id),
      documentType: Value(documentType),
      dni: Value(dni),
      fullName: Value(fullName),
      email: Value(email),
      birthday: Value(birthday),
      phone: Value(phone),
      status: Value(status),
      type: Value(type),
      userId:
          userId == null && nullToAbsent ? const Value.absent() : Value(userId),
    );
  }

  factory UserInfoData.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return UserInfoData(
      id: serializer.fromJson<int>(json['id']),
      documentType: serializer.fromJson<String>(json['documentType']),
      dni: serializer.fromJson<String>(json['dni']),
      fullName: serializer.fromJson<String>(json['fullName']),
      email: serializer.fromJson<String>(json['email']),
      birthday: serializer.fromJson<DateTime>(json['birthday']),
      phone: serializer.fromJson<String>(json['phone']),
      status: serializer.fromJson<bool>(json['status']),
      type: serializer.fromJson<String>(json['type']),
      userId: serializer.fromJson<int?>(json['user_id']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'documentType': serializer.toJson<String>(documentType),
      'dni': serializer.toJson<String>(dni),
      'fullName': serializer.toJson<String>(fullName),
      'email': serializer.toJson<String>(email),
      'birthday': serializer.toJson<DateTime>(birthday),
      'phone': serializer.toJson<String>(phone),
      'status': serializer.toJson<bool>(status),
      'type': serializer.toJson<String>(type),
      'user_id': serializer.toJson<int?>(userId),
    };
  }

  UserInfoData copyWith(
          {int? id,
          String? documentType,
          String? dni,
          String? fullName,
          String? email,
          DateTime? birthday,
          String? phone,
          bool? status,
          String? type,
          Value<int?> userId = const Value.absent()}) =>
      UserInfoData(
        id: id ?? this.id,
        documentType: documentType ?? this.documentType,
        dni: dni ?? this.dni,
        fullName: fullName ?? this.fullName,
        email: email ?? this.email,
        birthday: birthday ?? this.birthday,
        phone: phone ?? this.phone,
        status: status ?? this.status,
        type: type ?? this.type,
        userId: userId.present ? userId.value : this.userId,
      );
  @override
  String toString() {
    return (StringBuffer('UserInfoData(')
          ..write('id: $id, ')
          ..write('documentType: $documentType, ')
          ..write('dni: $dni, ')
          ..write('fullName: $fullName, ')
          ..write('email: $email, ')
          ..write('birthday: $birthday, ')
          ..write('phone: $phone, ')
          ..write('status: $status, ')
          ..write('type: $type, ')
          ..write('userId: $userId')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, documentType, dni, fullName, email,
      birthday, phone, status, type, userId);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is UserInfoData &&
          other.id == this.id &&
          other.documentType == this.documentType &&
          other.dni == this.dni &&
          other.fullName == this.fullName &&
          other.email == this.email &&
          other.birthday == this.birthday &&
          other.phone == this.phone &&
          other.status == this.status &&
          other.type == this.type &&
          other.userId == this.userId);
}

class UserInfoCompanion extends UpdateCompanion<UserInfoData> {
  final Value<int> id;
  final Value<String> documentType;
  final Value<String> dni;
  final Value<String> fullName;
  final Value<String> email;
  final Value<DateTime> birthday;
  final Value<String> phone;
  final Value<bool> status;
  final Value<String> type;
  final Value<int?> userId;
  const UserInfoCompanion({
    this.id = const Value.absent(),
    this.documentType = const Value.absent(),
    this.dni = const Value.absent(),
    this.fullName = const Value.absent(),
    this.email = const Value.absent(),
    this.birthday = const Value.absent(),
    this.phone = const Value.absent(),
    this.status = const Value.absent(),
    this.type = const Value.absent(),
    this.userId = const Value.absent(),
  });
  UserInfoCompanion.insert({
    this.id = const Value.absent(),
    required String documentType,
    required String dni,
    required String fullName,
    required String email,
    required DateTime birthday,
    required String phone,
    required bool status,
    this.type = const Value.absent(),
    this.userId = const Value.absent(),
  })  : documentType = Value(documentType),
        dni = Value(dni),
        fullName = Value(fullName),
        email = Value(email),
        birthday = Value(birthday),
        phone = Value(phone),
        status = Value(status);
  static Insertable<UserInfoData> custom({
    Expression<int>? id,
    Expression<String>? documentType,
    Expression<String>? dni,
    Expression<String>? fullName,
    Expression<String>? email,
    Expression<DateTime>? birthday,
    Expression<String>? phone,
    Expression<bool>? status,
    Expression<String>? type,
    Expression<int>? userId,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (documentType != null) 'documentType': documentType,
      if (dni != null) 'dni': dni,
      if (fullName != null) 'fullName': fullName,
      if (email != null) 'email': email,
      if (birthday != null) 'birthday': birthday,
      if (phone != null) 'phone': phone,
      if (status != null) 'status': status,
      if (type != null) 'type': type,
      if (userId != null) 'user_id': userId,
    });
  }

  UserInfoCompanion copyWith(
      {Value<int>? id,
      Value<String>? documentType,
      Value<String>? dni,
      Value<String>? fullName,
      Value<String>? email,
      Value<DateTime>? birthday,
      Value<String>? phone,
      Value<bool>? status,
      Value<String>? type,
      Value<int?>? userId}) {
    return UserInfoCompanion(
      id: id ?? this.id,
      documentType: documentType ?? this.documentType,
      dni: dni ?? this.dni,
      fullName: fullName ?? this.fullName,
      email: email ?? this.email,
      birthday: birthday ?? this.birthday,
      phone: phone ?? this.phone,
      status: status ?? this.status,
      type: type ?? this.type,
      userId: userId ?? this.userId,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (documentType.present) {
      map['documentType'] = Variable<String>(documentType.value);
    }
    if (dni.present) {
      map['dni'] = Variable<String>(dni.value);
    }
    if (fullName.present) {
      map['fullName'] = Variable<String>(fullName.value);
    }
    if (email.present) {
      map['email'] = Variable<String>(email.value);
    }
    if (birthday.present) {
      map['birthday'] = Variable<DateTime>(birthday.value);
    }
    if (phone.present) {
      map['phone'] = Variable<String>(phone.value);
    }
    if (status.present) {
      map['status'] = Variable<bool>(status.value);
    }
    if (type.present) {
      map['type'] = Variable<String>(type.value);
    }
    if (userId.present) {
      map['user_id'] = Variable<int>(userId.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('UserInfoCompanion(')
          ..write('id: $id, ')
          ..write('documentType: $documentType, ')
          ..write('dni: $dni, ')
          ..write('fullName: $fullName, ')
          ..write('email: $email, ')
          ..write('birthday: $birthday, ')
          ..write('phone: $phone, ')
          ..write('status: $status, ')
          ..write('type: $type, ')
          ..write('userId: $userId')
          ..write(')'))
        .toString();
  }
}

class Supplier extends Table with TableInfo<Supplier, SupplierData> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  Supplier(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  late final GeneratedColumn<int> id = GeneratedColumn<int>(
      'id', aliasedName, false,
      type: DriftSqlType.int,
      requiredDuringInsert: false,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _nameMeta = const VerificationMeta('name');
  late final GeneratedColumn<String> name = GeneratedColumn<String>(
      'name', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _phoneMeta = const VerificationMeta('phone');
  late final GeneratedColumn<String> phone = GeneratedColumn<String>(
      'phone', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  @override
  List<GeneratedColumn> get $columns => [id, name, phone];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'supplier';
  @override
  VerificationContext validateIntegrity(Insertable<SupplierData> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('name')) {
      context.handle(
          _nameMeta, name.isAcceptableOrUnknown(data['name']!, _nameMeta));
    } else if (isInserting) {
      context.missing(_nameMeta);
    }
    if (data.containsKey('phone')) {
      context.handle(
          _phoneMeta, phone.isAcceptableOrUnknown(data['phone']!, _phoneMeta));
    } else if (isInserting) {
      context.missing(_phoneMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  SupplierData map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return SupplierData(
      id: attachedDatabase.typeMapping
          .read(DriftSqlType.int, data['${effectivePrefix}id'])!,
      name: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}name'])!,
      phone: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}phone'])!,
    );
  }

  @override
  Supplier createAlias(String alias) {
    return Supplier(attachedDatabase, alias);
  }

  @override
  List<String> get customConstraints => const ['PRIMARY KEY(id)'];
  @override
  bool get dontWriteConstraints => true;
}

class SupplierData extends DataClass implements Insertable<SupplierData> {
  final int id;
  final String name;
  final String phone;
  const SupplierData(
      {required this.id, required this.name, required this.phone});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['name'] = Variable<String>(name);
    map['phone'] = Variable<String>(phone);
    return map;
  }

  SupplierCompanion toCompanion(bool nullToAbsent) {
    return SupplierCompanion(
      id: Value(id),
      name: Value(name),
      phone: Value(phone),
    );
  }

  factory SupplierData.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return SupplierData(
      id: serializer.fromJson<int>(json['id']),
      name: serializer.fromJson<String>(json['name']),
      phone: serializer.fromJson<String>(json['phone']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'name': serializer.toJson<String>(name),
      'phone': serializer.toJson<String>(phone),
    };
  }

  SupplierData copyWith({int? id, String? name, String? phone}) => SupplierData(
        id: id ?? this.id,
        name: name ?? this.name,
        phone: phone ?? this.phone,
      );
  @override
  String toString() {
    return (StringBuffer('SupplierData(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('phone: $phone')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, name, phone);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is SupplierData &&
          other.id == this.id &&
          other.name == this.name &&
          other.phone == this.phone);
}

class SupplierCompanion extends UpdateCompanion<SupplierData> {
  final Value<int> id;
  final Value<String> name;
  final Value<String> phone;
  const SupplierCompanion({
    this.id = const Value.absent(),
    this.name = const Value.absent(),
    this.phone = const Value.absent(),
  });
  SupplierCompanion.insert({
    this.id = const Value.absent(),
    required String name,
    required String phone,
  })  : name = Value(name),
        phone = Value(phone);
  static Insertable<SupplierData> custom({
    Expression<int>? id,
    Expression<String>? name,
    Expression<String>? phone,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (name != null) 'name': name,
      if (phone != null) 'phone': phone,
    });
  }

  SupplierCompanion copyWith(
      {Value<int>? id, Value<String>? name, Value<String>? phone}) {
    return SupplierCompanion(
      id: id ?? this.id,
      name: name ?? this.name,
      phone: phone ?? this.phone,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (name.present) {
      map['name'] = Variable<String>(name.value);
    }
    if (phone.present) {
      map['phone'] = Variable<String>(phone.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('SupplierCompanion(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('phone: $phone')
          ..write(')'))
        .toString();
  }
}

class Product extends Table with TableInfo<Product, ProductData> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  Product(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  late final GeneratedColumn<int> id = GeneratedColumn<int>(
      'id', aliasedName, false,
      type: DriftSqlType.int,
      requiredDuringInsert: false,
      $customConstraints: 'PRIMARY KEY');
  static const VerificationMeta _nameMeta = const VerificationMeta('name');
  late final GeneratedColumn<String> name = GeneratedColumn<String>(
      'name', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _detailMeta = const VerificationMeta('detail');
  late final GeneratedColumn<String> detail = GeneratedColumn<String>(
      'detail', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _priceMeta = const VerificationMeta('price');
  late final GeneratedColumn<double> price = GeneratedColumn<double>(
      'price', aliasedName, false,
      type: DriftSqlType.double,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _stockMeta = const VerificationMeta('stock');
  late final GeneratedColumn<int> stock = GeneratedColumn<int>(
      'stock', aliasedName, false,
      type: DriftSqlType.int,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _statusMeta = const VerificationMeta('status');
  late final GeneratedColumn<bool> status = GeneratedColumn<bool>(
      'status', aliasedName, false,
      type: DriftSqlType.bool,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _supplierIdMeta =
      const VerificationMeta('supplierId');
  late final GeneratedColumn<int> supplierId = GeneratedColumn<int>(
      'supplier_id', aliasedName, false,
      type: DriftSqlType.int,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  @override
  List<GeneratedColumn> get $columns =>
      [id, name, detail, price, stock, status, supplierId];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'product';
  @override
  VerificationContext validateIntegrity(Insertable<ProductData> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('name')) {
      context.handle(
          _nameMeta, name.isAcceptableOrUnknown(data['name']!, _nameMeta));
    } else if (isInserting) {
      context.missing(_nameMeta);
    }
    if (data.containsKey('detail')) {
      context.handle(_detailMeta,
          detail.isAcceptableOrUnknown(data['detail']!, _detailMeta));
    } else if (isInserting) {
      context.missing(_detailMeta);
    }
    if (data.containsKey('price')) {
      context.handle(
          _priceMeta, price.isAcceptableOrUnknown(data['price']!, _priceMeta));
    } else if (isInserting) {
      context.missing(_priceMeta);
    }
    if (data.containsKey('stock')) {
      context.handle(
          _stockMeta, stock.isAcceptableOrUnknown(data['stock']!, _stockMeta));
    } else if (isInserting) {
      context.missing(_stockMeta);
    }
    if (data.containsKey('status')) {
      context.handle(_statusMeta,
          status.isAcceptableOrUnknown(data['status']!, _statusMeta));
    } else if (isInserting) {
      context.missing(_statusMeta);
    }
    if (data.containsKey('supplier_id')) {
      context.handle(
          _supplierIdMeta,
          supplierId.isAcceptableOrUnknown(
              data['supplier_id']!, _supplierIdMeta));
    } else if (isInserting) {
      context.missing(_supplierIdMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  ProductData map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return ProductData(
      id: attachedDatabase.typeMapping
          .read(DriftSqlType.int, data['${effectivePrefix}id'])!,
      name: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}name'])!,
      detail: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}detail'])!,
      price: attachedDatabase.typeMapping
          .read(DriftSqlType.double, data['${effectivePrefix}price'])!,
      stock: attachedDatabase.typeMapping
          .read(DriftSqlType.int, data['${effectivePrefix}stock'])!,
      status: attachedDatabase.typeMapping
          .read(DriftSqlType.bool, data['${effectivePrefix}status'])!,
      supplierId: attachedDatabase.typeMapping
          .read(DriftSqlType.int, data['${effectivePrefix}supplier_id'])!,
    );
  }

  @override
  Product createAlias(String alias) {
    return Product(attachedDatabase, alias);
  }

  @override
  List<String> get customConstraints =>
      const ['FOREIGN KEY(supplier_id)REFERENCES supplier(id)'];
  @override
  bool get dontWriteConstraints => true;
}

class ProductData extends DataClass implements Insertable<ProductData> {
  final int id;
  final String name;
  final String detail;
  final double price;
  final int stock;
  final bool status;
  final int supplierId;
  const ProductData(
      {required this.id,
      required this.name,
      required this.detail,
      required this.price,
      required this.stock,
      required this.status,
      required this.supplierId});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['name'] = Variable<String>(name);
    map['detail'] = Variable<String>(detail);
    map['price'] = Variable<double>(price);
    map['stock'] = Variable<int>(stock);
    map['status'] = Variable<bool>(status);
    map['supplier_id'] = Variable<int>(supplierId);
    return map;
  }

  ProductCompanion toCompanion(bool nullToAbsent) {
    return ProductCompanion(
      id: Value(id),
      name: Value(name),
      detail: Value(detail),
      price: Value(price),
      stock: Value(stock),
      status: Value(status),
      supplierId: Value(supplierId),
    );
  }

  factory ProductData.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return ProductData(
      id: serializer.fromJson<int>(json['id']),
      name: serializer.fromJson<String>(json['name']),
      detail: serializer.fromJson<String>(json['detail']),
      price: serializer.fromJson<double>(json['price']),
      stock: serializer.fromJson<int>(json['stock']),
      status: serializer.fromJson<bool>(json['status']),
      supplierId: serializer.fromJson<int>(json['supplier_id']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'name': serializer.toJson<String>(name),
      'detail': serializer.toJson<String>(detail),
      'price': serializer.toJson<double>(price),
      'stock': serializer.toJson<int>(stock),
      'status': serializer.toJson<bool>(status),
      'supplier_id': serializer.toJson<int>(supplierId),
    };
  }

  ProductData copyWith(
          {int? id,
          String? name,
          String? detail,
          double? price,
          int? stock,
          bool? status,
          int? supplierId}) =>
      ProductData(
        id: id ?? this.id,
        name: name ?? this.name,
        detail: detail ?? this.detail,
        price: price ?? this.price,
        stock: stock ?? this.stock,
        status: status ?? this.status,
        supplierId: supplierId ?? this.supplierId,
      );
  @override
  String toString() {
    return (StringBuffer('ProductData(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('detail: $detail, ')
          ..write('price: $price, ')
          ..write('stock: $stock, ')
          ..write('status: $status, ')
          ..write('supplierId: $supplierId')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode =>
      Object.hash(id, name, detail, price, stock, status, supplierId);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is ProductData &&
          other.id == this.id &&
          other.name == this.name &&
          other.detail == this.detail &&
          other.price == this.price &&
          other.stock == this.stock &&
          other.status == this.status &&
          other.supplierId == this.supplierId);
}

class ProductCompanion extends UpdateCompanion<ProductData> {
  final Value<int> id;
  final Value<String> name;
  final Value<String> detail;
  final Value<double> price;
  final Value<int> stock;
  final Value<bool> status;
  final Value<int> supplierId;
  const ProductCompanion({
    this.id = const Value.absent(),
    this.name = const Value.absent(),
    this.detail = const Value.absent(),
    this.price = const Value.absent(),
    this.stock = const Value.absent(),
    this.status = const Value.absent(),
    this.supplierId = const Value.absent(),
  });
  ProductCompanion.insert({
    this.id = const Value.absent(),
    required String name,
    required String detail,
    required double price,
    required int stock,
    required bool status,
    required int supplierId,
  })  : name = Value(name),
        detail = Value(detail),
        price = Value(price),
        stock = Value(stock),
        status = Value(status),
        supplierId = Value(supplierId);
  static Insertable<ProductData> custom({
    Expression<int>? id,
    Expression<String>? name,
    Expression<String>? detail,
    Expression<double>? price,
    Expression<int>? stock,
    Expression<bool>? status,
    Expression<int>? supplierId,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (name != null) 'name': name,
      if (detail != null) 'detail': detail,
      if (price != null) 'price': price,
      if (stock != null) 'stock': stock,
      if (status != null) 'status': status,
      if (supplierId != null) 'supplier_id': supplierId,
    });
  }

  ProductCompanion copyWith(
      {Value<int>? id,
      Value<String>? name,
      Value<String>? detail,
      Value<double>? price,
      Value<int>? stock,
      Value<bool>? status,
      Value<int>? supplierId}) {
    return ProductCompanion(
      id: id ?? this.id,
      name: name ?? this.name,
      detail: detail ?? this.detail,
      price: price ?? this.price,
      stock: stock ?? this.stock,
      status: status ?? this.status,
      supplierId: supplierId ?? this.supplierId,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (name.present) {
      map['name'] = Variable<String>(name.value);
    }
    if (detail.present) {
      map['detail'] = Variable<String>(detail.value);
    }
    if (price.present) {
      map['price'] = Variable<double>(price.value);
    }
    if (stock.present) {
      map['stock'] = Variable<int>(stock.value);
    }
    if (status.present) {
      map['status'] = Variable<bool>(status.value);
    }
    if (supplierId.present) {
      map['supplier_id'] = Variable<int>(supplierId.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('ProductCompanion(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('detail: $detail, ')
          ..write('price: $price, ')
          ..write('stock: $stock, ')
          ..write('status: $status, ')
          ..write('supplierId: $supplierId')
          ..write(')'))
        .toString();
  }
}

class UserProduct extends Table with TableInfo<UserProduct, UserProductData> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  UserProduct(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  late final GeneratedColumn<int> id = GeneratedColumn<int>(
      'id', aliasedName, false,
      type: DriftSqlType.int,
      requiredDuringInsert: false,
      $customConstraints: 'PRIMARY KEY');
  static const VerificationMeta _userInfoIdMeta =
      const VerificationMeta('userInfoId');
  late final GeneratedColumn<int> userInfoId = GeneratedColumn<int>(
      'user_info_id', aliasedName, false,
      type: DriftSqlType.int,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _productIdMeta =
      const VerificationMeta('productId');
  late final GeneratedColumn<int> productId = GeneratedColumn<int>(
      'product_id', aliasedName, false,
      type: DriftSqlType.int,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _subtotalMeta =
      const VerificationMeta('subtotal');
  late final GeneratedColumn<double> subtotal = GeneratedColumn<double>(
      'subtotal', aliasedName, false,
      type: DriftSqlType.double,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _quantityMeta =
      const VerificationMeta('quantity');
  late final GeneratedColumn<int> quantity = GeneratedColumn<int>(
      'quantity', aliasedName, false,
      type: DriftSqlType.int,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  static const VerificationMeta _dateMeta = const VerificationMeta('date');
  late final GeneratedColumn<DateTime> date = GeneratedColumn<DateTime>(
      'date', aliasedName, false,
      type: DriftSqlType.dateTime,
      requiredDuringInsert: true,
      $customConstraints: 'NOT NULL');
  @override
  List<GeneratedColumn> get $columns =>
      [id, userInfoId, productId, subtotal, quantity, date];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'user_product';
  @override
  VerificationContext validateIntegrity(Insertable<UserProductData> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('user_info_id')) {
      context.handle(
          _userInfoIdMeta,
          userInfoId.isAcceptableOrUnknown(
              data['user_info_id']!, _userInfoIdMeta));
    } else if (isInserting) {
      context.missing(_userInfoIdMeta);
    }
    if (data.containsKey('product_id')) {
      context.handle(_productIdMeta,
          productId.isAcceptableOrUnknown(data['product_id']!, _productIdMeta));
    } else if (isInserting) {
      context.missing(_productIdMeta);
    }
    if (data.containsKey('subtotal')) {
      context.handle(_subtotalMeta,
          subtotal.isAcceptableOrUnknown(data['subtotal']!, _subtotalMeta));
    } else if (isInserting) {
      context.missing(_subtotalMeta);
    }
    if (data.containsKey('quantity')) {
      context.handle(_quantityMeta,
          quantity.isAcceptableOrUnknown(data['quantity']!, _quantityMeta));
    } else if (isInserting) {
      context.missing(_quantityMeta);
    }
    if (data.containsKey('date')) {
      context.handle(
          _dateMeta, date.isAcceptableOrUnknown(data['date']!, _dateMeta));
    } else if (isInserting) {
      context.missing(_dateMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  UserProductData map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return UserProductData(
      id: attachedDatabase.typeMapping
          .read(DriftSqlType.int, data['${effectivePrefix}id'])!,
      userInfoId: attachedDatabase.typeMapping
          .read(DriftSqlType.int, data['${effectivePrefix}user_info_id'])!,
      productId: attachedDatabase.typeMapping
          .read(DriftSqlType.int, data['${effectivePrefix}product_id'])!,
      subtotal: attachedDatabase.typeMapping
          .read(DriftSqlType.double, data['${effectivePrefix}subtotal'])!,
      quantity: attachedDatabase.typeMapping
          .read(DriftSqlType.int, data['${effectivePrefix}quantity'])!,
      date: attachedDatabase.typeMapping
          .read(DriftSqlType.dateTime, data['${effectivePrefix}date'])!,
    );
  }

  @override
  UserProduct createAlias(String alias) {
    return UserProduct(attachedDatabase, alias);
  }

  @override
  List<String> get customConstraints => const [
        'FOREIGN KEY(user_info_id)REFERENCES user_info(id)',
        'FOREIGN KEY(product_id)REFERENCES product(id)'
      ];
  @override
  bool get dontWriteConstraints => true;
}

class UserProductData extends DataClass implements Insertable<UserProductData> {
  final int id;
  final int userInfoId;
  final int productId;
  final double subtotal;
  final int quantity;
  final DateTime date;
  const UserProductData(
      {required this.id,
      required this.userInfoId,
      required this.productId,
      required this.subtotal,
      required this.quantity,
      required this.date});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['user_info_id'] = Variable<int>(userInfoId);
    map['product_id'] = Variable<int>(productId);
    map['subtotal'] = Variable<double>(subtotal);
    map['quantity'] = Variable<int>(quantity);
    map['date'] = Variable<DateTime>(date);
    return map;
  }

  UserProductCompanion toCompanion(bool nullToAbsent) {
    return UserProductCompanion(
      id: Value(id),
      userInfoId: Value(userInfoId),
      productId: Value(productId),
      subtotal: Value(subtotal),
      quantity: Value(quantity),
      date: Value(date),
    );
  }

  factory UserProductData.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return UserProductData(
      id: serializer.fromJson<int>(json['id']),
      userInfoId: serializer.fromJson<int>(json['user_info_id']),
      productId: serializer.fromJson<int>(json['product_id']),
      subtotal: serializer.fromJson<double>(json['subtotal']),
      quantity: serializer.fromJson<int>(json['quantity']),
      date: serializer.fromJson<DateTime>(json['date']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'user_info_id': serializer.toJson<int>(userInfoId),
      'product_id': serializer.toJson<int>(productId),
      'subtotal': serializer.toJson<double>(subtotal),
      'quantity': serializer.toJson<int>(quantity),
      'date': serializer.toJson<DateTime>(date),
    };
  }

  UserProductData copyWith(
          {int? id,
          int? userInfoId,
          int? productId,
          double? subtotal,
          int? quantity,
          DateTime? date}) =>
      UserProductData(
        id: id ?? this.id,
        userInfoId: userInfoId ?? this.userInfoId,
        productId: productId ?? this.productId,
        subtotal: subtotal ?? this.subtotal,
        quantity: quantity ?? this.quantity,
        date: date ?? this.date,
      );
  @override
  String toString() {
    return (StringBuffer('UserProductData(')
          ..write('id: $id, ')
          ..write('userInfoId: $userInfoId, ')
          ..write('productId: $productId, ')
          ..write('subtotal: $subtotal, ')
          ..write('quantity: $quantity, ')
          ..write('date: $date')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode =>
      Object.hash(id, userInfoId, productId, subtotal, quantity, date);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is UserProductData &&
          other.id == this.id &&
          other.userInfoId == this.userInfoId &&
          other.productId == this.productId &&
          other.subtotal == this.subtotal &&
          other.quantity == this.quantity &&
          other.date == this.date);
}

class UserProductCompanion extends UpdateCompanion<UserProductData> {
  final Value<int> id;
  final Value<int> userInfoId;
  final Value<int> productId;
  final Value<double> subtotal;
  final Value<int> quantity;
  final Value<DateTime> date;
  const UserProductCompanion({
    this.id = const Value.absent(),
    this.userInfoId = const Value.absent(),
    this.productId = const Value.absent(),
    this.subtotal = const Value.absent(),
    this.quantity = const Value.absent(),
    this.date = const Value.absent(),
  });
  UserProductCompanion.insert({
    this.id = const Value.absent(),
    required int userInfoId,
    required int productId,
    required double subtotal,
    required int quantity,
    required DateTime date,
  })  : userInfoId = Value(userInfoId),
        productId = Value(productId),
        subtotal = Value(subtotal),
        quantity = Value(quantity),
        date = Value(date);
  static Insertable<UserProductData> custom({
    Expression<int>? id,
    Expression<int>? userInfoId,
    Expression<int>? productId,
    Expression<double>? subtotal,
    Expression<int>? quantity,
    Expression<DateTime>? date,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (userInfoId != null) 'user_info_id': userInfoId,
      if (productId != null) 'product_id': productId,
      if (subtotal != null) 'subtotal': subtotal,
      if (quantity != null) 'quantity': quantity,
      if (date != null) 'date': date,
    });
  }

  UserProductCompanion copyWith(
      {Value<int>? id,
      Value<int>? userInfoId,
      Value<int>? productId,
      Value<double>? subtotal,
      Value<int>? quantity,
      Value<DateTime>? date}) {
    return UserProductCompanion(
      id: id ?? this.id,
      userInfoId: userInfoId ?? this.userInfoId,
      productId: productId ?? this.productId,
      subtotal: subtotal ?? this.subtotal,
      quantity: quantity ?? this.quantity,
      date: date ?? this.date,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (userInfoId.present) {
      map['user_info_id'] = Variable<int>(userInfoId.value);
    }
    if (productId.present) {
      map['product_id'] = Variable<int>(productId.value);
    }
    if (subtotal.present) {
      map['subtotal'] = Variable<double>(subtotal.value);
    }
    if (quantity.present) {
      map['quantity'] = Variable<int>(quantity.value);
    }
    if (date.present) {
      map['date'] = Variable<DateTime>(date.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('UserProductCompanion(')
          ..write('id: $id, ')
          ..write('userInfoId: $userInfoId, ')
          ..write('productId: $productId, ')
          ..write('subtotal: $subtotal, ')
          ..write('quantity: $quantity, ')
          ..write('date: $date')
          ..write(')'))
        .toString();
  }
}

abstract class _$Database extends GeneratedDatabase {
  _$Database(QueryExecutor e) : super(e);
  late final User user = User(this);
  late final UserInfo userInfo = UserInfo(this);
  late final Supplier supplier = Supplier(this);
  late final Product product = Product(this);
  late final UserProduct userProduct = UserProduct(this);
  @override
  Iterable<TableInfo<Table, Object?>> get allTables =>
      allSchemaEntities.whereType<TableInfo<Table, Object?>>();
  @override
  List<DatabaseSchemaEntity> get allSchemaEntities =>
      [user, userInfo, supplier, product, userProduct];
}
