// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
function beforeEach(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
}
function destructivelyAppendCat(){
return cats.push("Ralph");
cats;
}
beforeEach();

function destructivelyPrependCat(){
return cats.unshift("Bob");
cats;
}
beforeEach();

function destructivelyRemoveLastCat(){
return cats.pop();
cats;
}
beforeEach();
 
function destructivelyRemoveFirstCat(){
    return cats.shift();
    cats;
}
beforeEach();

function appendCat(name){
  return [...cats, name];
  
}
beforeEach();

function prependCat(name){
    return [name, ...cats]
}
beforeEach();

function removeLastCat(){
    return cats.slice(0, 2);

}
beforeEach();
function removeFirstCat(){
    return cats.slice(-2);
}
//beforeEach();