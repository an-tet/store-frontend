import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { envConfig } from './common/config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('postgresHost'),
        port: configService.getOrThrow('postgresPort'),
        username: configService.getOrThrow('postgresUser'),
        password: configService.getOrThrow('postgresPassword'),
        database: configService.getOrThrow('postgresDb'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ProductsModule,
    CustomersModule,
    CommonModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
