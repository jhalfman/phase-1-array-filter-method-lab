// Code your solution here
function findMatching(names, matcher) {
   return names.filter(function(name) {return name.toLowerCase() === matcher.toLowerCase()})
}

function fuzzyMatch(names, letters) {
    const number = letters.length;
    return names.filter(function(name) {
        return name.slice(0, number) === letters;
    })
}

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver["name"] === name;
    })
}