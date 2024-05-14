function calculateBMI() {
    let mass = parseFloat(prompt("Enter your mass in kg:"));
    let height = parseFloat(prompt("Enter your height in cm:"));
    let bmi = mass / Math.pow(height / 100, 2);
    if (bmi < 18.5) {
        alert("You are underweight.");
    } else if (bmi < 25) {
        alert("You have a normal BMI.");
    } else if (bmi < 30) {
        alert("You are overweight.");
    } else {
        alert("You are obese.");
    }
}

do {
    calculateBMI();
    var response = prompt("Do you wish to continue? (yes/no)").toLowerCase();
} while (response === "yes");
