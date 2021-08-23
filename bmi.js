function tinh_chi_so_bmi() {
    let cannang = +document.getElementById('cannang').value;
    let chieucao = +document.getElementById('chieucao').value;
    bmi = cannang / ( chieucao ^ 2 )
    if (bmi < 18)
        document.write("Underweight");
    else if (bmi < 25.0)
        document.write("Normal");
    else if (bmi < 30.0)
        document.write("Overweight");
    else
        document.write("Obese");
    document.getElementById('result').innerHTML = bmi;

}
