import { Component, Input, ViewChild, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { Customer } from 'src/app/models/customer.model';

@Component({
    selector: 'app-detail-customer',
    templateUrl: './detail-customer.component.html',
    styleUrls: ['./detail-customer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailCustomerComponent implements OnChanges {
    @ViewChild('sidenav') public sidenav?: MatSidenav;
    @Input() customer: Customer = {};
    @Input() closeNav: boolean = false;

    constructor() {
    }

    ngOnChanges(): void {
        if (this.closeNav) {
            if(!this.sidenav?.opened){
                this.sidenav?.toggle();
            }
        } else {
            this.sidenav?.close();
        }
    }
}