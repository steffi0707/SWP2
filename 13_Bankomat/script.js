console.log("1. Einzahlen");
console.log("2. Abheben");
console.log("3. Kontostand");
console.log("4. Ende");




if (selection == 1) {
    console.log("Geben sie den Betrag ein dein Sie einzahlen möchten:");
}

if (selection == 2) {
    console.log("");
}

if (selection == 3) {
    System.out.println("Der Kontostand beträgt:" + balance);  
}

if (selection == 4) {
    isFinished = true;
    System.out.println("Machine is stopping!");
}
