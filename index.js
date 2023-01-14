
function findMatching(array, string) {
    return array.filter(name => name.toUpperCase() === string.toUpperCase())
}
function fuzzyMatch(array, firstLetter) {
    return array.filter(name => name[0] === firstLetter[0])
}

function matchName(array, match) {
    return array.filter(name => name.name === match)
    
}