// M-1 

// Foydalanuvchidan oyligini so’rang. Va soliq bilan yoki soliqsiz hisoblash kerakligini so’rang. So’ng yillik topadigan pulini hisoblab bering (soliq bilan yoki soliqsin).

// let text = document.querySelector(".text");

// let maosh = prompt("Oylik maoshingizni kiriting");

// let soliq = prompt("oylik soliqlaringizning umumiy summasini kiriting");

// let oylikKirim = maosh - soliq

// let yillikDaromad = oylikKirim*12

// text.textContent = yillikDaromad


//  M-2

// Foydalanuvchidan oyligini so’rang. Va soliq bilan yoki soliqsiz hisoblash kerakligini so’rang. So’ng yillik YIG’ADIGAN pulini hisoblab bering (soliq bilan yoki soliqsin). Foydalanuvchi topgan pulidan 90% sarflaydi - shuni inobatga oling.


let text = document.querySelector(".text");

let maosh = prompt("Oylik maoshingizni kiriting");

let xisoblash = prompt("Soliqlar bilan xisoblansinmi ? \n Xa yoki Yo'q deb javob bering")

if( xisoblash=="Xa" || xisoblash=="xa" ){

   let soliqlar=prompt("Oylik soliqlaringizni kiriting")

   let sofDaromad=maosh-soliqlar
   
   let yillik=sofDaromad*12
   let jamiPul = (yillik/100)*10

   text.textContent = jamiPul
  

}

else if(xisoblash=="yo'q" || xisoblash == "Yo'q"){

   text.textContent = maosh*12/100*10

}

else(
 text.textContent = "Ma'lumot noto'g'ri kiritilgan"
)


