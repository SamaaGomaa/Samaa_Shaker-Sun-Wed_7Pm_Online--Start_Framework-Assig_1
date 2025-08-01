import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./Components/navbar/navbar";
import { Footer } from "./Components/footer/footer";
import { Copyright } from "./Components/copyright/copyright";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Copyright],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'project1';
}
