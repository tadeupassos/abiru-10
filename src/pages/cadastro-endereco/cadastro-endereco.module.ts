import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroEnderecoPage } from './cadastro-endereco';

@NgModule({
  declarations: [
    CadastroEnderecoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroEnderecoPage),
  ],
})
export class CadastroEnderecoPageModule {}
