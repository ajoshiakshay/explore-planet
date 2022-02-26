import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninUpModalComponent } from './signin-up-modal/signin-up-modal.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
  ],
  declarations: [SigninUpModalComponent]
})
export class SharedModule { }
