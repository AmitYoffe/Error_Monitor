export default function capitalizeWord(word: string) {
    const firstLetter = word.charAt(0)
    const capitalizedFirstLetter = firstLetter.toUpperCase()
    const remainingLetters = word.slice(1)
    const capitalizedWord = capitalizedFirstLetter + remainingLetters

    return capitalizedWord
}
