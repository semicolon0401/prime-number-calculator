var maximum = 100000, now_number = 1, number_will_be_divided = 0, amount = 0;
while (maximum != now_number) {
    ++now_number;
    while (now_number != number_will_be_divided) {
        if (now_number % ++number_will_be_divided == 0) {
            ++amount;
        }
    }
    if (amount == 2) {
            if (now_number < 10) {
                document.write("0");
            }
            if (now_number < 100) {
                document.write("0")
            }
            if (now_number < 1000) {
                document.write("0")
            }
            if (now_number < 10000) {
                document.write("0")
            }
            document.write(now_number + " ");
    }
    number_will_be_divided = 0;
    amount = 0;
}
