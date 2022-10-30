import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/modelst';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
  @Input() game: Game;
  constructor() { }

  ngOnInit(): void {
  }

}
