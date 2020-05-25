import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Analysis } from '../../entities/analysis';

@Injectable({
  providedIn: 'root'
})
export class AnalysesService {

  constructor(private httpClient: HttpClient) { }

  public getAnalyses(): Observable<Analysis[]> {
    return new Observable<Analysis[]>((observer) => {
      observer.next([
        {id: 0, name: "Кровь", description: "Общий анализ крови."}
      ]);
      observer.complete();
    });
  }
}
