function PascalCase(str: string) {
  // Initialize the final values
  let allLettersOfEveryWordAreCapitalArray: string[] = [];
  let allLettersOfEveryWordAreCapital: string;

  // While looking here, assume that the given sentence is "hello cats"
  // Goal: have "hello cats" be translated to "HelloCats".

  let firstLetterIsCapital: string = str.replace(str[0], str[0].toUpperCase());
  // Hello cats

  let values = firstLetterIsCapital.split(" ");
  // [ "Hello", "cats" ]

  for (let i = 0; i < values.length; i++) {
    let value = values[i];

    if (value == values[0]) {
      allLettersOfEveryWordAreCapitalArray.push(value);
      continue;
    }

    let capitalValue = value.replace(
      value.charAt(0),
      value.charAt(0).toUpperCase()
    );
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

const inp = <HTMLInputElement>document.getElementById("inp")!;
const btn = <HTMLButtonElement>document.getElementById("btn")!;
const answer = <HTMLSpanElement>document.getElementById("answer")!;
const originalString = <HTMLSpanElement>(
  document.getElementById("originalString")!
);

btn?.addEventListener("click", () => {
  originalString.textContent = `"${inp.value}"`;
  answer.textContent = PascalCase(inp.value);
});
