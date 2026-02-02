const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);

// Здесь соблюдается принцип DRY - не повторяйся
// Не повторяй тот код, где можно этого не делать