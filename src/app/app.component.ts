import { Component } from '@angular/core';
import { ArduinoService } from './services/arduino.service';
import { Arduino } from './models/arduino.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private estados: Arduino;

  constructor( private arduinoService: ArduinoService ){
    this.arduinoService.obtenerEstados().subscribe( (dispotivio: Arduino) => this.estados = dispotivio );
  }

  cambiarGenerador(){
    if ( this.estados.generador === 1 ){ this.estados.generador = 0; } 
    else if (this.estados.generador === 0){ this.estados.generador = 1; }
    this.arduinoService.cambiarEstadoGenerador(this.estados).subscribe();
  }

  cambiarPuerta(){
    if ( this.estados.puerta === 1 ){ this.estados.puerta = 0; }
    else if (this.estados.puerta === 0){ this.estados.puerta = 1; }
    this.arduinoService.cambiarEstadoPuerta(this.estados).subscribe();
  }

  cambiarPatio(){
    if ( this.estados.patio === 1 ){ this.estados.patio = 0; }
    else if (this.estados.patio === 0){ this.estados.patio = 1; }
    this.arduinoService.cambiarEstadoPatio(this.estados).subscribe();
  }

}
