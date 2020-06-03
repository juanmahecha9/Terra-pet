/* Permite concectar y crear los metodos para consumir las funciones de la APIrest de la base de datos */
import { Injectable } from '@angular/core';
/* Permite injectar dependencias o funciones que estan fuera de la carpeta donde se alija el programa de angular */

/* usar el http */
/* httpclient, traae los metodos y httpheaders trae las rutas */
import { HttpClient, HttpHeaders } from '@angular/common/http';

/* recoger la informacion y transmitirla a la api y transmitir la respuesta de la api */
import { Observable, pipe } from 'rxjs';


/* decorador */
@Injectable()
/* crear una clase para exportar */
export class productoService {
    /* ruta de la api, donde se consumen los datos */
    apiUrl = 'http://localhost:8000/api'

    /* Crear una variable privada. Para que la informaciòn viaje de manera privada */
    constructor(private http: HttpClient) {

    }
    /* Conexion entre el front y el backend para poder cceder al servicio */
    /* permite enviar los parametros a la api CREAR DATOS*/
    createData(newData) {
        const params = JSON.stringify(newData);
        /* Convierte la informacion a un archivo json */
        const options = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
        /* Se crea una contante la cual sirve para indicar que la informacion que se enviara es de tipo json */

        /* Para el login se utilza el metodo post, este campo es para registro y login */
        return this.http.post(
            this.apiUrl + '/new', //se le indica la ruta de la api
            params, //se indicanlos datos que se envian
            options // se indica que son datos en forma de json
            /*  se retorna el objeto el cual  por medio de http se le encia por medtodo post */
        ).pipe(res => res) /* convierte datos de entrea en datos de alida para que llegue a la api en forma de respuesta y nos trae la respuesta de nuestra api */
    }

   

}
/* recordar que esas funciones se deben llamar igual a la de los controladores del backend */