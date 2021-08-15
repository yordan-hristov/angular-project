import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()

export class isUserService implements CanActivate {
    get isLogged(): boolean {
        return Boolean(localStorage.getItem('email'));
    }

    constructor(private router: Router) { }
    canActivate(): boolean {
        if (this.isLogged) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}

@Injectable()

export class isGuestService implements CanActivate {
    get isLogged(): boolean {
        return Boolean(localStorage.getItem('email'));
    }

    constructor(private router: Router) { }
    canActivate(): boolean {
        if (!this.isLogged) {
            return true;
        } else {
            this.router.navigate(['/'])
            return false;
        }
    }
}

@Injectable()

export class isAdminService implements CanActivate {
    get isAdmin(): boolean {
        return localStorage.getItem('role') == 'admin'
    }

    constructor(private router: Router) { }
    canActivate(): boolean {
        if (this.isAdmin) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}