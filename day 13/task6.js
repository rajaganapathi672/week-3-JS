function bmi_calc(weight, height) {
    // Convert height from centimeters to meters
    height = height / 100;
    let bmi = weight / (height * height);
    if (bmi <= 24.0) {
        return "underweight";
    } else {
        return "overweight";
    }
}

let w1 = 89;
let h1 = 173;
console.log(bmi_calc(w1, h1));