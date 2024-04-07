let btn = document.querySelector('button')
let data1 =  document.querySelector(".data1")
let data2 =  document.querySelector(".data2")
let result1 =  document.querySelector(".result1")
let result2 =  document.querySelector(".result2")
let inbutNum =  document.querySelector(".inbutNum")

btn.addEventListener("click",()=>{

  fetch(`https://v6.exchangerate-api.com/v6/5e118bf9ab986d0ad49cb02a/latest/${data1.value}`)
  .then((r)=>r.json())
  .then((t)=>{

    let outbut = inbutNum.value*t.conversion_rates[`${data1.value}`]
    let outbut2= inbutNum.value*t.conversion_rates[`${data2.value}`]
    let data=t.conversion_rates;

// let arr=Object.keys(data)
//     arr.forEach((e) => {
//       console.log(e)
//     });

    result1.innerHTML=outbut
    result2.innerHTML= "="+outbut2
  })
})

