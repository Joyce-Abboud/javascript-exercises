const findTheOldest = function (people) {
    const currentAges = people.map((person) => {
        const age = person.yearOfDeath - person.yearOfBirth;
        return age;
    });
    if (people.some(person => person.yearOfDeath === undefined)) {
        currentAges.forEach((age, index) => {
            if (people[index].yearOfDeath === undefined) {
                currentAges[index] = ((new Date()).getFullYear()) - people[index].yearOfBirth;
            }
        });
    }

    const peopleWithAges = people.map((person, index) => {
        return { name: person, age: currentAges[index] };
    });


    const sorted = peopleWithAges.sort((a, b) => b.age - a.age);

    // Returns the person object from the highest-aged pair
    return sorted[0].name;
};

// Do not edit below this line
module.exports = findTheOldest;