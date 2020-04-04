
const Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.printName = () => {
        // return this.name;
        console.log(this.name);
    };
}


const persons = [];
for (let i = 0; i < 1000000; i++) {
    persons.push(new Person(`name ${i}`, 42));
}

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
