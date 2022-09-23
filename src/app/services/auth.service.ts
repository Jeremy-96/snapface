import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private token = 'FakeToken';

  getToken(): string {
    return this.token;
  }
}