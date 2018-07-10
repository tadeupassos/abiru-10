import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroClientePage } from './cadastro-cliente';
import { IonMaskModule } from '@pluritech/ion-mask';

@NgModule({
  declarations: [
    CadastroClientePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroClientePage),
    IonMaskModule.forRoot()
  ],
})
export class CadastroClientePageModule {}
