function printEasterDate(year) {
    n = year - 1900
    a = n % 19
    b  ((7* a + 1) / 19)
    m = (11 * a + 4 - b) % 29
    q = Math.floor (n / 4)
    w = (n + q + 31 - m) % 7
    p = Math.floor (25 - m - w)

    if (p > 0) {
        console.log("Ostern ist der")
    }
    else {
        console.log("OStern ist der");
    }
}

printEasterDate(2023)