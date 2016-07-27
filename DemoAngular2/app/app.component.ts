import { Component ,Input } from '@angular/core';

@Component({
   selector: 'my-app',
   template: `
   <h1>{{title}}</h1>
   <h2>My Text is: {{my}}</h2>
    `
})
export class AppComponent {
      title = 'Abc';
      my = 'xyz';
}

@Component({
    selector: 'my-component',
    template: `
   <h1>My name is {{name}}...</h1>
    `
})
export class MyComponent {
    name = 'Jaynika';
 
}

@Component({
    selector: 'my-input',
    template: '<p>Hello {{this.myName}}</p>'
})
export class MyInput {
    //name=this.myName;
    constructor(){}
}

@Component({
  selector: 'user-profile',
  template: '<div>{{user.name}}</div>'
})
export class UserProfile {
  @Input() user;
  constructor() {}
}


