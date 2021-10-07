# Employeemanagerapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Frontend of EmployeeManager app developed on the basis of a course by Junior on Amigoscode's YouTube channel: https://www.youtube.com/watch?v=Gx4iBLKLVHk

All credit goes to the respective creators of the course.

The frontend features adding, editing, deleting and searching for employee information as cards on a board structure.

![Default](https://github.com/Cifer0/employeemanagerapp/blob/main/screenshots/default.png)

![Add Employee](https://github.com/Cifer0/employeemanagerapp/blob/main/screenshots/addEmployee.png)

![Edit Employee](https://github.com/Cifer0/employeemanagerapp/blob/main/screenshots/editEmployee.png)

![Delete Employee](https://github.com/Cifer0/employeemanagerapp/blob/main/screenshots/deleteEmployee.png)

![Search](https://github.com/Cifer0/employeemanagerapp/blob/main/screenshots/search.png)

The course was published on February 5, 2021 and thus used older versions of programs and frameworks. This project aims to contribute to Junior's work by updating and fixing problems posed by outdated versions.

## Versions

- Visual Studio Code 1.60.2
- Angular 12.2.6
- RxJS: 6.6.7
- TypeScript: 4.3.5

## Fixes

Newer versions of TypeScript implemented a strict property initialization policy by default. This caused for a `Property '...' has no initializer and is not definitely assigned in the constructor.`-error on attributes `employees`, `editEmployee` and `deleteEmployee` in `app.compontens.ts`. Suggested solutions included adding `"strictPropertyInitialization": false` in `tsconfig.json` under `"angularCompilerOptions"`. This, however, did not fix the problem in my case and as such I managed to fix this problem by initializing employees as an empty list and using the `!`-Operator on `editEmployee` and `deleteEmployee` as I was sure that these values would never be `null` on call.

Another problem was caused by a `Argument of type 'null' is not assignable to parameter of type 'Employee'.`-error in `app.component.html` and `Argument of type 'number | undefined' is not assignable to parameter of type 'number'.`-error. This was fixed by adding `"strictNullChecks": false` in `tsconfig.json` under `"angularCompilerOptions"`.

## Possible Sources for Errors

Importing `EmployeeService` **before** `HttpClientModule` in `app.module.ts` seemed to be important as in a different sequence the program did not work.

Similarly, adding the `src` of `jquery` **before** the `src` of `bootstrap` in `index.html` seemed to be important.
