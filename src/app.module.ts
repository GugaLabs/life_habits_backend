import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreConfigModule } from './nest_modules/config_module/config.module';
import { SharedModule } from './nest_modules/shared_module/shared.module';
import { DatabaseModule } from './nest_modules/database_module/database_module';

@Module({
  imports: [CoreConfigModule.forRoot(), DatabaseModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
