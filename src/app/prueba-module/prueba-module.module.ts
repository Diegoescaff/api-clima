import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PruebaComponent } from "./prueba/prueba/prueba.component";
import { MaterialModule } from "../material-module/material.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [PruebaComponent],
  imports: [CommonModule, MaterialModule, HttpClientModule, FormsModule],
  exports: [PruebaComponent],
})
export class PruebaModuleModule {}
