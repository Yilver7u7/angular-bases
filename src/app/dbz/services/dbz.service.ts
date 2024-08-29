import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 10000,
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7000,
  },{
    id: uuid(),
    name: 'Trunks',
    power: 6000,
  },{
    id: uuid(),
    name: 'Krillin',
    power: 1000,
  }
];

  addNewCharacter( character: Character): void{

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  deleteCharacterByID( id: string ){
    this.characters.filter( character => character,id !== id);
  }


}


