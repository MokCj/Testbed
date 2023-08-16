import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private readonly configUrl = 'config.json';

  constructor() {}

  loadConfig(): Promise<any> {
    return fetch(this.configUrl)
      .then(response => response.json())
      .then(data => data.environmentName)
  }
}
