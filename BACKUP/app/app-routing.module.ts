import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/*{
  "development": {
      "PORT": 3000,
      "MONGODB_URI": "mongodb://localhost:27017/angular-login-app"
  },
  "production": {
      "PORT": 80,
      "MONGODB_URI": "mongodb://xxxxx/DB_Name"
  }
}*/
