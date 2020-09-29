import { NgModule, Component } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule
    ]
})
export class MaterialModule { }
