import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  async greeting(text: string) {
    return await firstValueFrom(
      this.http.post(
        '/api/greeting',
        { text },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
    );
  }
}
