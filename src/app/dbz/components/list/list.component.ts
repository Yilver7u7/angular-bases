import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: '',
    power: 0,
  }]

  @Output()  // Este evento es para emitir el ID del personaje al main-page.component
  public onDelete: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(indice:number): void{
    //TODO: emitir ID del personaje
    console.log(indice);
    this.onDelete.emit( indice );
  }

  addCharacter(character:Character){
    this.characterList.push(character);
  }


}
