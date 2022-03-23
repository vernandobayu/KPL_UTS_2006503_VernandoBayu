function result(){
    var gaji, potongan, tambahan;
    var nik=parseInt(document.getElementById("nik").value);
    var name=(document.getElementById("name").value);
    var golongan=parseInt(document.getElementById("golongan").value)
    var tunjangan=(document.getElementById("tunjangan").value)
    var asuransi = document.querySelector('input[name="asuran"]:checked').value

    document.getElementById("nik_result").innerHTML=nik;
    document.getElementById("nama_result").innerHTML=name;
    document.getElementById("golongan_result").innerHTML=golongan;
    document.getElementById("tunjangan_result").innerHTML=tunjangan;
    document.getElementById("asuransi_result").innerHTML=asuransi;

    function kalkulasi_golongan(){
        if (golongan == "1") {
            gaji = 3500000;
            // document.getElementById("gaji_result").innerHTML=gaji;
        } else if (golongan == "2"){
            gaji = 4000000;
            // document.getElementById("gaji_result").innerHTML=gaji;

        } else{
            gaji =5000000;
            // document.getElementById("gaji_result").innerHTML=gaji;
        }
    }
    
    function kalkulasi_tunjangan() {
        if (tunjangan == "0-2 tahun") {
            tambahan = 200000;
            // document.getElementById("bahan").innerHTML=tambahan;
        } else if (tunjangan == "2-5 tahun"){
            tambahan = 350000;
            // document.getElementById("bahan").innerHTML=tambahan;
        }
        else {
            tambahan = 500000;
            // document.getElementById("bahan").innerHTML=tambahan;
        }
    }
    function kalkulasi_potongan(){
        if (asuransi == "Ya") {
            potongan = -300000;
            // document.getElementById("bahan").innerHTML=potongan;
        } else {
            potongan = 0;
            // document.getElementById("bahan").innerHTML=potongan;
        }
    }

    function kalkulasi_final(){
        var hasil;
        hasil = gaji + tambahan + potongan;
        parseInt(document.getElementById("gaji_result").innerHTML=hasil);
    }
    kalkulasi_potongan();
    kalkulasi_tunjangan();
    kalkulasi_golongan()
    kalkulasi_final();
}
function resetall() {
    document.getElementById("myForm").reset();
    document.getElementById("r2-col-2").reset();
}
