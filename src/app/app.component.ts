import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from "@angular/material/icon";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {TodoListComponent} from "../todo-list/todo-list.component";
import {SettingsComponent} from "../settings/settings.component";
import {ComponentService} from "../services/ComponentService";
import {CategoryListComponent} from "../category-list/category-list.component";
import {AddTodoComponent} from "../add-todo/add-todo.component";
import {MessageBoxComponent} from "../message-box/message-box.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, NavBarComponent, TodoListComponent, SettingsComponent, CategoryListComponent, AddTodoComponent, MessageBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public componentService: ComponentService) {
  }

  protected readonly Page = Page;
}

export enum Page {
  LIST, NEW, SETTINGS
}
