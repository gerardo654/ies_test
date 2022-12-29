import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanInsideGuard implements CanActivate {
  constructor(private router: Router) {}
  token: string | null | undefined;
  canActivate(): boolean {
    try{
      this.onResetDataToken();
      if (this.token) {
        return true;
      } else {
        this.router.navigateByUrl('');
        return false;
      }
    } catch (error) {
      this.router.navigateByUrl('');
      return false;
    }
  }
  onResetDataToken(): any {
    this.token = localStorage.getItem('token');
  }
}
