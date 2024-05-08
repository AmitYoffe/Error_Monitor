export function capitalizeWord(str: string) {
    return str.toLowerCase().split(/\s|-/).map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}