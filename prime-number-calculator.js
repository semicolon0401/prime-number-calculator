var maximum = 100000, now_number = 1, number_will_be_divided = 0, amount = 0;
while (maximum != now_number) {
    ++now_number;
    while (now_number != number_will_be_divided) {
        if (now_number % ++number_will_be_divided == 0) {
            ++amount;
        }
    }
    if (amount == 2) {
        document.write(now_number + "<br>");
    }
    number_will_be_divided = 0;
    amount = 0;
}
