import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


// const API_URL = `https://adminpro-backend-angular.herokuapp.com/api/arduino`;
const API_URL = `https://adminpro-backend-angular.herokuapp.com/api/arduino`;
const ID_DISPOSITIVO = `5fdb73490219fe047cc79df3`;

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {

  constructor(private http: HttpClient) { }

  obtenerEstados() {
    return this.http.get(`${API_URL}/${ID_DISPOSITIVO}`).pipe(
      map( (response: any) => response.dispositivo )
    );
  }

  cambiarEstadoGenerador(generador) {
    return this.http.put(`${API_URL}/${ID_DISPOSITIVO}`, generador);
  }

  cambiarEstadoPuerta(puerta){
    return this.http.put(`${API_URL}/${ID_DISPOSITIVO}`, puerta);
  }

  cambiarEstadoPatio(patio){
    return this.http.put(`${API_URL}/${ID_DISPOSITIVO}`, patio);
  }

}
