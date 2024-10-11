import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './common/configs/configs.module';
import { DatabaseModule } from './shared/database/database.module';
import { appProvider } from './common/app.provider';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ConfigsModule, DatabaseModule, UserModule],
  controllers: [AppController],
  providers: [AppService, ...appProvider],
})
export class AppModule {}
