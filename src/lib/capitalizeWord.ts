export function capitalizeWord(word: string) {
    const firstLetter = word.charAt(0)
    const capitalizedFirstLetter = firstLetter.toUpperCase()
    const remainingLetters = word.slice(1)
    const capitalizedWord = capitalizedFirstLetter + remainingLetters

    return capitalizedWord;
}

// export function titleCase(str: string) {
//     return str.toLowerCase().split(' ').map(function (word) {
//         return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');
// }

//TODO: Capitalize the dashboard choice component title