import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnDestroy {

  public intervalASubs: Subscription;

 constructor() {

  /*this.retornaObservable().pipe(
    retry(1)
  ).subscribe(
    valor => console.log('Subs: ',valor),
    error => console.warn('Error: ', error),
    () => console.info('Obs terminado')
  );*/
  this.intervalASubs = this.retornaIntervalo().subscribe( console.log );

 }

 ngOnDestroy(): void {
   this.intervalASubs.unsubscribe();
 }

 retornaIntervalo(): Observable<number> {
  return interval(100)
                      .pipe(
                        //take(10),
                        map( valor => valor + 1),
                        filter( valor => (valor % 2 === 0) ? true: false ),
                        );
 }

 retornaObservable(): Observable<number> {

  let i = -1;

  return new Observable<number>( observer => {

    const intervalo = setInterval( () => {
      
      i++;
      observer.next(i);

      if(i === 4 ) {
        clearInterval(intervalo);
        observer.complete();
      }

      if(i === 2 ) {
        //i = 0;
        observer.error('i llego al valor de 2');
      }

    }, 1000 )

  });

 }

}
