function mesin() {
    const from = document.getElementById("fromSelect").value;
    const to = document.getElementById("toSelect").value;
    const jumlah = document.getElementById("jumlah").value;
    const hasilDiv = document.querySelector(".hasil");

    if (!jumlah) {
        hasilDiv.innerText = "Masukin angka";
        return;
    }

    $.ajax({
        url: `https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?base=${from}`,
        method: "GET",
        headers: {
            "x-rapidapi-key": "1cf6c94ca4msh39665c60734fbbdp1004a1jsnc3e3ae2d7f6d",
            "x-rapidapi-host": "currency-conversion-and-exchange-rates.p.rapidapi.com"
        },

        success: function(response) {
            const rate = response.rates[to];

            if (rate) {
                const hasilAkhir = jumlah * rate;
                hasilDiv.innerText = `${jumlah} ${from} = ${hasilAkhir.toLocaleString()} ${to}`;
            } else {
                hasilDiv.innerText = "Error: rate tidak ditemukan!";
            }
        },

        error: function() {
            hasilDiv.innerText = "coba cek koneksi atau key-nya udah limit";
        }
    });
}