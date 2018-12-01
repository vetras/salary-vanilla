function computeBasics(salary) {
    var taxes = computeTaxes(salary);
    var liquid = salary - taxes.irs - taxes.ss;
    return {
        gross: {

            perDay: salary / 22.0,
            perHour: salary / 176.0,
            perYear: salary * 14
        },
        liquid: {
            perDay: liquid / 22.0,
            perHour: liquid / 176.0,
            perYear: liquid * 14
        }
    }
}

function computeTaxes(salary) {
    return {
        irs: salary * 0.21,
        ss: salary * 0.11
    }
}