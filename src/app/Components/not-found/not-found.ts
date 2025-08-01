import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterOutlet],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {
  imgUrl:string = "../404-Error.png"
  title:string = "Not-Found"
}
