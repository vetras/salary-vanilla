var DomIds = {

    base_salary: "base_salary",
    results: {
        div: "results",
        gross: {
            perDay: "results.gross.perday",
            perHour: "results.gross.perhour",
            perYear: "results.gross.peryear",
        },
        liquid: {
            perDay: "results.liquid.perday",
            perHour: "results.liquid.perhour",
            perYear: "results.liquid.peryear",
        },
        taxes: {
            irs: "results.irs",
            ss: "results.ss"
        }
    }
}

var opt = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
};

function onPageLoad() {
    document.getElementById(DomIds.base_salary).onkeydown = (event) => {
        if (event.keyCode == 13) {
            computeButtonClicked();
        }
    };
    console.log("ready");
}

function computeButtonClicked() {
    var salary = document.getElementById(DomIds.base_salary).value;

    var r = DomIds.results;
    var g = r.gross;
    var L = r.liquid;

    var data = computeBasics(salary);
    var gg = data.gross;
    document.getElementById(g.perDay).innerHTML = gg.perDay.toLocaleString("en", opt);
    document.getElementById(g.perHour).innerHTML = gg.perHour.toLocaleString("en", opt);
    document.getElementById(g.perYear).innerHTML = gg.perYear.toLocaleString("en", opt);
    var LL = data.liquid;
    document.getElementById(L.perDay).innerHTML = LL.perDay.toLocaleString("en", opt);
    document.getElementById(L.perHour).innerHTML = LL.perHour.toLocaleString("en", opt);
    document.getElementById(L.perYear).innerHTML = LL.perYear.toLocaleString("en", opt);

    var taxes = computeTaxes(salary);
    document.getElementById(r.taxes.irs).innerHTML = taxes.irs.toLocaleString("en", opt);
    document.getElementById(r.taxes.ss).innerHTML = taxes.ss.toLocaleString("en", opt);

    show(document.getElementById(r.div));
}


document.onload = onPageLoad();