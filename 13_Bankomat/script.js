import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {   
    readline.question("", (userRes) => {
      resolve(userRes);
      //readline.close();
    });
  });
};

let selection = readLineAsync();

console.log("1. Einzahlen");
console.log("2. Abheben");
console.log("3. Kontostand");
console.log("4. Beenden");

console.log("Wähle eine Eingabe");
let inputOfUser = await readLineAsync();
console.log("Your name is " + inputOfUser);

if (selection == 1) {
    console.log("Geben sie den Betrag ein dein Sie einzahlen möchten:");
}

if (selection == 2) {
    console.log("Geben sie den Betrag ein den Sie Abheben möchten:");
}

if (selection == 3) {
    System.out.println("Der Kontostand beträgt:" + balance);  
}

if (selection == 4) {
    isFinished = true;
    System.out.println("Machine is stopping!");
}
