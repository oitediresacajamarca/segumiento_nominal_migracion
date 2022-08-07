import { Test, TestingModule } from '@nestjs/testing';
import { MigracionController } from './migracion.controller';

describe('MigracionController', () => {
  let controller: MigracionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MigracionController],
    }).compile();

    controller = module.get<MigracionController>(MigracionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
