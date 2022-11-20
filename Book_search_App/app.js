// const apiKey = 'ttbrlaekgp82331907003'
// const url = `https://www.aladin.co.kr/ttb/api/ItemList.aspx?MaxResults=10&QueryType=ItemNewAll&SearchTarget=Book&Version=20131101&output=js&start=1&ttbkey=ttbrlaekgp82331907003`


fetch(`https://proxy.cors.sh/https://www.aladin.co.kr/ttb/api/ItemList.aspx?MaxResults=10&QueryType=ItemNewAll&SearchTarget=Book&Version=20131101&output=js&start=1&ttbkey=ttbrlaekgp82331907003`)
.then(res => res.json())
.then(data => console.log(data))


