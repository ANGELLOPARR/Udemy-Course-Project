export class Ingredient {

  // By including "public" in the constructor parameters, BEHIND THE SCENES
  // JS / TS will create public properties with those names. That way
  // we don't have to define them and set them every time.
  constructor(public name: string, public amount: number) {
  }
}