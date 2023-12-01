import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
     
  }
  getSelamun():string{
    return "Hacıbaba vokke"
  }
}
