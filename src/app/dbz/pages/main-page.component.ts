import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{


  public characters: Character[] = [{
    name: 'Goku',
    power: 10000,
  },{
    name: 'Vegeta',
    power: 7000,
  },{
    name: 'Trunks',
    power: 6000,
  },{
    name: 'Krillin',
    power: 1000,
  }
];

  addNewCharacter(newCharacter: Character): void{
    this.characters.push(newCharacter);
  }

  onDeleteCharacter( index: number) {
    this.characters.splice(index, 1);
  }


}






