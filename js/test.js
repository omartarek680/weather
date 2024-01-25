let search = "cairo"
async function test(city="alex") {
        test = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=36366e31871040c9bb7114356242101%20&q=${search}&days=3`)
    if(test.ok&&test.status!==400){
       let search = await test.json() 
       console.log(city)
    
    } else {
        search = "alex"
        console.log(search)
    }
}
test()