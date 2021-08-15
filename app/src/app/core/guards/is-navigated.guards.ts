import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()

export class isNavigatedService implements CanActivate {

    constructor(private router: Router) { }
    canActivate(): boolean {
        if(this.router.navigated){
            return true;
        }else{
            this.router.navigate(['cars']);
            return false;
        }
    }
}