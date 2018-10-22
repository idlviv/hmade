import { McsModule } from './mcs.module';

describe('McsModule', () => {
  let mcsModule: McsModule;

  beforeEach(() => {
    mcsModule = new McsModule();
  });

  it('should create an instance', () => {
    expect(mcsModule).toBeTruthy();
  });
});
