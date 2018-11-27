import { Routes } from "@angular/router";

import { AdminComponent } from "../components/admin/admin.component";
import { ContactComponent } from "../components/pages/contact/contact.component";
import { EditComponent } from "../components/pages/edit/edit.component";
import { HomeComponent } from "../components/pages/home/home.component";

export const routerConfig: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home",
    component: HomeComponent,
    data: { icon: "fa-home", text: "Start Page", menu: true }
  },
  { path: "edit/:id", component: EditComponent },
  {
    path: "edit",
    component: AdminComponent,
    data: { icon: "fa-edit", text: "New Machine", menu: true }
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { icon: "fa-envelope", text: "Contact Form", menu: true }
  }
];
