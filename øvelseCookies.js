//LOCAL STORAGE IN CONSOLE TEST
localStorage.setItem('name', 'Obama')
localStorage.removeItem('name')

//SESSION STORAGE IN CONSOLE TEST
sessionStorage.setItem('name', 'Trump')
sessionStorage.removeItem('name')

//COOKIES STORAGE IN CONSOLE TEST
document.cookie = 'lastName=Forsen; expires=' + new Date(2024, 5, 5).toUTCString()  //WHEN THE COOKIE EXPIRES TEST

console.log(document.cookie)











