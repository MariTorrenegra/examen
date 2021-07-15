import { Component } from '@angular/core';
import { ResultadoService } from './services/result/resultado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'servicios';
  public result: any 
  public articles: Array<any> = []
  public categories: Array<any> = []
  public services: Array<any> = []
  public testimony: Array<any> = []

  constructor(
    private resultsService: ResultadoService, 
  ){ 
    this.resultsService.getResultados().subscribe((resp: any) => {
      this.result = resp.result
      this.articles = this.result.articles_pymes_test
      this.categories = this.result.categories
      this.services = this.result.categories.services
      this.testimony = this.result.testimony
      console.log(this.services);
      console.log(this.categories);
    })
   }

}
