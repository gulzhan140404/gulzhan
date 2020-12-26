let key = "zyl6w7CaoyhVfnyhcgDA2ZknnuORVjyV"
let Api = "http://api.giphy.com/v1/gifs/search?q="
let secondStr = '&api_key=' + key;
search = async () => {
    let search = document.getElementById('text')
    let url = Api + search.value + secondStr + "&limit=12" //ограничения 
    let resp = await fetch(url)
    let data = await resp.json()
    console.log(data)
    let arr = data.data
    console.log(arr)
    let div = document.getElementById('output')
    div.innerHTML = ''
    search.value = ''
    arr.forEach(el => {
        let ifrm = document.createElement('iframe')
        ifrm.src = el.embed_url
        div.appendChild(ifrm).style.cssText = 'margin-top:30px; border:none;'
    });

}
