import {Injectable} from '@angular/core';

@Injectable()
export class SelectedCompanyService {

  public companyIds: number[] = [];
  public companyName = '';
}
