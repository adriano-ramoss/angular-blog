import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../component/menu-title/menu-title.component';
import { BigCardComponent } from '../../component/big-card/big-card.component';
import { SmallCardComponent } from '../../component/small-card/small-card.component';
import { MenuBarComponent } from '../../component/menu-bar/menu-bar.component';
import { RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
