import { Component } from '@angular/core';
import { MotokoService } from "./services/motoko.service";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule ]
})
export class AppComponent {
  title = 'angularmotoko';

  constructor(private motokoService: MotokoService){
    let hello = motokoService.greet("Mister Max");
    console.log(hello);
  }
}
