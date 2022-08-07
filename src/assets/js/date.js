const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
export function clock (elem) { 
    let date = new Date();
    let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    let day = days[date.getDay()];
    let limit = hours > 12 ? 'PM' : 'AM';
    elem.textContent = `${day} ${hours}:${minutes}:${seconds} ${limit}`;
    setTimeout(clock, 1000, elem);
}
export function getDays(){
    let d = new Date().getDay();
    let arr = days.slice(d);
    let arr2 = days.slice(0, d);
    let con = arr.concat(arr2);
    con.length = 5;
    return con;
}