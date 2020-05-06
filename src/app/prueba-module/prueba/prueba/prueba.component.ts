import { Component, OnInit } from "@angular/core";
import { HitsService } from "./prueba.service";
import { FormControl, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import Toast from "sweetalert2";
interface Location {
  city: string;
  country: string;
}

@Component({
  selector: "app-prueba",
  templateUrl: "./prueba.component.html",
  styleUrls: ["./prueba.component.css"],
})
export class PruebaComponent implements OnInit {
  paisInput: string;
  ciudadInput: string;
  botonValido: boolean;
  dataSource: any;
  title: string;
  locations: any;

  constructor(public hitsService: HitsService) {}
  displayedColumns: string[] = ["dia", "actual", "min", "max"];
  selectFormControl = new FormControl("", Validators.required);
  location: Location[] = [
    { city: "Santiago", country: "Chile" },
    { city: "Nueva York", country: "Estados Unidos" },
    { city: "Caracas", country: "Venezuela" },
    { city: "Buenos Aires", country: "Argentina" },
  ];
  ngOnInit() {
    if (localStorage.getItem("location").length === 0) {
      this.locations = [...this.location];
    } else {
      this.locations = JSON.parse(localStorage.getItem("location"));
    }
  }

  prueba(location: any) {
    this.findlocation(location);
  }

  valida() {
    if (this.paisInput.length > 1 && this.ciudadInput.length > 1) {
      this.botonValido = true;
    } else {
      this.botonValido = false;
    }
  }

  addLocation() {
    localStorage.removeItem("location");
    const pushlocation = { city: this.ciudadInput, country: this.paisInput };
    console.log(pushlocation);
    this.locations.push(pushlocation);
    localStorage.setItem("location", JSON.stringify(this.locations));
  }

  findlocation(location: any) {
    this.hitsService.findlocationSelect(location).subscribe((res: any) => {
      console.log("respuesta");
      console.log(res.data.weather);
      if (res.data.weather != null || res.data.weather != undefined) {
        this.dataSource = res.data.weather;
        this.title = `El clima de ${location.city} de ${location.country}`;
      } else {
        Swal.fire(
          "Error",
          "No se encuentra infromación para la localidad solicitada",
          "error"
        );
      }
    });
  }
}
