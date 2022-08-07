async function fOPen(url) {
    let res = await fetch(url);
    if(res.ok) return res.json();
    else {
        alert('Oops something get wrong');
        throw new Error(`Cannot connect to ${url}`);
    }
}
async function weatherData(link1, link2){
    const [daily, weekly] = await Promise.all([
        fOPen(link1),
        fOPen(link2),
    ])
    return { daily, weekly};
}
export {
    fOPen,
    weatherData
};