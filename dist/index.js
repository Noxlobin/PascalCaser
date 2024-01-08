"use strict";
function PascalCase(str) {
    // Initialize the final values
    let allLettersOfEveryWordAreCapitalArray = [];
    let allLettersOfEveryWordAreCapital;
    // While looking here, assume that the given sentence is "hello cats"
    // Goal: have "hello cats" be translated to "HelloCats".
    let firstLetterIsCapital = str.replace(str[0], str[0].toUpperCase());
    // Hello cats
    let values = firstLetterIsCapital.split(" ");
    // [ "Hello", "cats" ]
    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        if (value == values[0]) {
            allLettersOfEveryWordAreCapitalArray.push(value);
            continue;
        }
        let capitalValue = value.replace(value.charAt(0), value.charAt(0).toUpperCase());
        allLettersOfEveryWordAreCapitalArray.push(capitalValue);
    }
    // ["Hello", "Cats"]
    allLettersOfEveryWordAreCapital =
        allLettersOfEveryWordAreCapitalArray.join("");
    // HelloCats
    let finalStr = allLettersOfEveryWordAreCapital;
    // Just for a bit of cleaniness :)
    return finalStr;
    /* Just for a bit of context, you can skip the first step entirely for camelCase. */
}
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const answer = document.getElementById("answer");
const originalString = (document.getElementById("originalString"));
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    originalString.textContent = `"${inp.value}"`;
    answer.textContent = PascalCase(inp.value);
});
//# sourceMappingURL=index.js.map