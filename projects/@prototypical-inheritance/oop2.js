isEven => (i) => i % 2 === 0;

const Person = function(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.printName = () => {
    console.log(this.name);
};

Person.prototype.address = 'online';

console.log ('start')
const persons = [];
for (let i = 0; i < 1000000; i++) {
    persons.push(new Person(`Bob`, 42));
    // if (i % 2 === 0 ) { 
    //         persons[i].printName = () => {        
    //         console.log ('ng-' + this.name )
    //     }
    // }
}

// const bob1 = new Person ('bob', 33)
// const bob2 = new Person ('bob2', 33)
// bob2.printName = () => {
//     console.log ('ng-'+this)
// }

// console.log ('done')
// console.log (persons[1].printName())
// console.log (persons[2].printName())

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
