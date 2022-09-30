# Angular DX Check

## Onboarding

I did `npm install -g @angular/cli`. I made a new app and a simple component - works great. I included SCSS and Routing.

Onboarding worked as expected - all the files were generated in the correct places.

## First Test

I wrote a simple test for my component `<Greeter />`

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss']
})
export class GreeterComponent implements OnInit {
  count = 5

  constructor() { }

  ngOnInit(): void {
  }

  increment () {
    this.count++
  }
}
```

And added a test:

```ts
import { GreeterComponent } from './greeter.component'

describe('greeter.component.cy.ts', () => {
  it('playground', () => {
    cy.mount(GreeterComponent)
  })
})
```

Also works great. `cy.mount` has no squigglies - the types were found correctly (surprisingly; this is often not the case). The correct types for `describe` were also found (no conflict with Jest, etc - since Angular does not use Jest).


## Errors

### User App Error

I added some invalid code:

```ts
import { Component, OnInit } from '@angular/core';

  let foo bar '' 

 @Component({
  selector: 'greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss']
})
export class GreeterComponent implements OnInit {
  count = 5
  // ...
```

In this case, I don't see anything unless I open the console:

![](./error.png)

Same result for valid code, but a typing error:

```ts
import { Component, OnInit } from '@angular/core';

 @Component({
  selector: 'greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss']
})
export class GreeterComponent implements OnInit {
  const foo: number = ''
```

![](./error-2.png)

## Test Code Error

I changed my test to have invalid code:


```ts
import { GreeterComponent } from './greeter.component'

describe('greeter.component.cy.ts', () => {
  it('playground', () => {
    /asd fasdf 
    cy.mount(GreeterComponent)
  })
})
```

This shows an error in Command Log. This seems better.

![](./error-3.png)

A typing error doesn't show up - I think this is fine, since the code is valid (TypeScript is running with `transpileOnly`, presumably). The error IS logged to the console.

```ts
import { GreeterComponent } from './greeter.component'

describe('greeter.component.cy.ts', () => {
  it('playground', () => {
    let foo: string = 21
    cy.mount(GreeterComponent)
  })
})
```

![](./error-4.png)

