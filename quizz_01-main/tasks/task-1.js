/*
1. შექმენით ბაზისური ობიექტი სახელად 'Animal' შემდეგი თვისებებით:b
   - სახელი (string)
   - ასაკი (number)
   - makeSound() მეთოდი, რომელიც აბრუნებს "Some sound"
*/
class Animal {
   constructor(name, age) {
     this.name = name;
     this.age = age;
   }
   makeSound() {
     return "Some sound";
   }
 }
/*2. შექმენით 'Dog' ობიექტი, რომელიც მემკვიდრეობით იღებს 'Animal'-დან და დაამატება:
   - ჯიში (string)
   - makeSound() მეთოდი, რომელიც ჩაანაცვლებს მშობლის მეთოდს და აბრუნებს "Woof!"
*/
function createDog(name, age, breed) {
   let dog = new Animal(name, age);
   dog.breed = breed;
   dog.makeSound = function() {
     return "Woof!";
   };
   return dog;
 } 
/*
3. შექმენით 'Cat' ობიექტი, რომელიც მემკვიდრეობით იღებს 'Animal'-დან:
   - ფერი (string)
   - makeSound() მეთოდი, რომელიც ჩაანაცვლებს მშობლის მეთოდს და აბრუნებს "Meow!"
   */
   function createCat(name, age, color) {
      let cat = new Animal(name, age);
      cat.color = color;
      cat.makeSound = function() {
        return "Meow!";
      };
      return cat;
    }
const dog = createDog("Rex", 3, "German Shepherd");
const cat = createCat("Whiskers", 2, "Gray");
console.log(dog.name); // უნდა დაბეჭდოს: "Rex"
console.log(dog.age); // უნდა დაბეჭდოს: 3
console.log(dog.breed); // უნდა დაბეჭდოს: "German Shepherd"
console.log(dog.makeSound()); // უნდა დაბეჭდოს: "Woof!"
console.log(cat.name); // უნდა დაბეჭდოს: "Whiskers"
console.log(cat.age); // უნდა დაბეჭდოს: 2
console.log(cat.color); // უნდა დაბეჭდოს: "Gray"
console.log(cat.makeSound()); // უნდა დაბეჭდოს: "Meow!"
