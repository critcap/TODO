import { Component } from '@angular/core';
import {DataTableService} from "../services/DataTableService";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  constructor(public dataTableService: DataTableService) {
  }
}
