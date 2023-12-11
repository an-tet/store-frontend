import 'package:drift/drift.dart';

part 'database_manager.g.dart';

@DriftDatabase(
  include: {'tables.drift'},
)
class Database extends _$Database {
  Database(QueryExecutor e) : super(e);

  @override
  int get schemaVersion => 2;

  @override
  MigrationStrategy get migration {
    return MigrationStrategy(
      onCreate: (m) async {
        await m.createAll();

        await batch((b) {
          b.insert(
            user,
            UserCompanion.insert(username: 'User1', password: '1234567890'),
          );
        });
      },
    );
  }
}
