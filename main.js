const endpoint = 'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple';


function show(data) {
    let tab = ` `;
    let i=1;
    console.log(data.results)
    for (let r of data.results) {
        tab += `
        <div class="flex w-full">
                    <label class="w-2/5 text-center m-auto">${r.question}</label>
                    <input type="text" id="user_answer${i}" placeholder="Trả lời" class="w-2/5 py-3 px-5 my-2 mx-0">
                    <button type="button" class="p-2 m-auto bg-orange-500 rounded-md" onclick="getUserInput()">Summit</button>
                </div>`
        i++;
    }
    document.getElementById("appEl").innerHTML = tab;
}


var obj;

function getApi(url){
    fetch(endpoint)
    .then(res => res.json())
    //Dem data luu vao bien obj
    .then(data => {
        obj = data
        show(data)
    })
}


var dataFetch = getApi(endpoint)

var score_User = 0;

function getUserInput(){
    check = []
    let i=0;
    let score =0;

    for(i;i<5;i++){
        check.push(document.getElementById(`user_answer${i+1}`).value);
    }
    i=0;
    for (i;i<5;i++){
        //Ktra ket qua
        if (check[i]===obj.results[i].correct_answer){
            console.log(check[i])
            console.log(obj.results[i].correct_answer)
            score+=10;
        }
    }
    console.log(score);
    score_User = score
    //Thong bao so diem
    alert ("You got  " + score_User)
}
