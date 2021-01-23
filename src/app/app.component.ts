import { Component } from '@angular/core';
import { of } from 'rxjs';
import { filter,map } from 'rxjs/operators';
import  { Observable,from } from 'rxjs';
import { fromEvent } from 'rxjs';


//Example 1
const nums = of(1, 2, 4);

const squareValues = map((val: number) => val * val);
const squaredNums = squareValues(nums);

squaredNums.subscribe(x => console.log(x));


//Creating Observables: Observable using Constructor 

const simpleObservable = new Observable((observer ) => {
  observer.next("Message 1");
  observer.next("Message 2");
  observer.complete();
})

simpleObservable.subscribe(val => console.log(val),
                          error => console.log("error"),
                          () =>  console.log("complete")
                          );



//Creating Observables: Observable Using Create 

const ObjUsingCreate = Observable.create(observer => {
  //Executing Observable
  observer.next("Message_Create1");
  observer.next("Message_Create2");
  observer.next("Message_Create3");

  observer.complete()
})

//Subscribing to Observables
ObjUsingCreate
  .subscribe(val => console.log(val),
            error => console.log("error"),
            () => console.log("complete")
            );


//Observable Using Of

const array = ["Of1","Of2","Of3","Of4","Of5"]
const ObsOf = of(array);
ObsOf.
  subscribe(val => console.log(val),
            error => console.log("error"),
            () => console.log("complete")
            );

//Observable - Multi Array
const array1 = ["A1","A2","A3","A4","A5"]
const array2 = ["A6","A7","A8","A9","A10"]
const ObsOfMulti = of(array1,array2);
ObsOfMulti.
  subscribe(val => console.log(val),
            error => console.log("error"),
            () => console.log("complete")
            );


//Observable from a value,array and string
const obsofAllData = of(100, [1, 2, 3, 4, 5, 6, 7],"Hello World");
    obsofAllData.subscribe(val => console.log(val),
      error => console.log("error"),
      () => console.log("complete"))

// Create an Observable out of a promise
const data = from(fetch('https://www.reddit.com/r/javascript/top/.json?limit=5'));
// Subscribe to begin listening for async result
data.subscribe({
  next(response) { console.log(response); },
  error(err) { console.error('Error: ' + err); },
  complete() { console.log('Completed'); }
});




const squareOdd = of(1, 2, 3, 4, 5)
  .pipe(
    filter((nx:number) => nx % 2 !== 0),
    map((nx:number) => nx * nx)
  );

squareOdd.subscribe(x => console.log(x));
  //const multiply = num => map((value: number) => value * num);






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    title = 'AngApp1';

    testMethod() {
      
    }
}
