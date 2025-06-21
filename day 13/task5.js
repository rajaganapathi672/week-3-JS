function bmi_calc(weight,height){
    return weight/(height*height);
}
let w1=89;
let h1=173;
console.log(Math.round((bmi_calc(w1,h1))));