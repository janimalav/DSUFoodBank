import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuthenticated: BehaviorSubject<boolean>;

  constructor(private credentialsService: CredentialsService) {
    this.isAuthenticated = new BehaviorSubject<boolean>(false);
  }

  setIsAuth(value: boolean) {
    this.isAuthenticated.next(value);
  }
  getIsAuth() {
    return this.isAuthenticated.asObservable();
  }
}
