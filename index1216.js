// let slime = new Object();
//
// slime.hp = 10;
// slime.name = "MySlime"

let Slime = function() {
    this.hp = 10;
    this.name = "MySlime";
    setInterval(function aaa() {
        this.hp += 10;
    }, 1000)



}

let slime = new Slime();

console.log(slime.hp);

var abc = 10;
console.log(window);
