const findTheOldest = function(people) {
    const currYear = new Date().getFullYear();
    let maxAge = 0;
    return people.reduce(
        (maxPerson, person) => {
            let currAge;
            if("yearOfDeath" in person){
                currAge=person.yearOfDeath - person.yearOfBirth;
                
            }
            else{
                currAge=currYear-person.yearOfBirth;
            }
            if(currAge > maxAge){
                maxAge = currAge;
                return person
            }
            return maxPerson;
        }, people[0]
    );
};

// Do not edit below this line
module.exports = findTheOldest;
