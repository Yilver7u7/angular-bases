import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
     return `${this.name}`.toLocaleUpperCase();
    }

  getDrescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman'
  }

  changeAge(): void {
    this.age = 25;
  }

  getReset(): void {
    this.name = 'ironman';
    this.age = 45;
  }



}
