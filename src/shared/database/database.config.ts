import { ConfigModule, ConfigService } from "@nestjs/config";
import { SequelizeModuleAsyncOptions } from "@nestjs/sequelize";


export const databaseConfig: SequelizeModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      dialect: 'sqlite',
      storage: configService.get<string>('dbStorage'),
      autoLoadModels: true,
      synchronize: false
    }),
    inject: [ConfigService]
};