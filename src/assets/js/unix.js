export default function (time) {
    let d = new Date(time * 1000);
    let hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
    let minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
    return `${hours}:${minutes}`;
}