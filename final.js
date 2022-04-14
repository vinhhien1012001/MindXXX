
function countOccur(arr,x){
    let res = 0;
    for (let i=0;i<arr.length;i++){
        if (arr[i]===x)
        {
            res++;
        }
    }
    return res;
}

function bai_1(arr1,arr2){
    res=[];
    total_arr = arr1+ arr2;
    for (let i=0;i<total_arr.length;i++){
        if (countOccur(total_arr,total_arr[i])===1){
            res.push(total_arr[i])
        }
    }
    console.log(res);
    return res;
}



bai_1([1,2,'a'],[1,3,'b'])



function bai_2(arr){
    for (let i=0;i<arr.length;i++){
        rank=1;
        for (let j=0;j<arr.length;j++){
            if (arr[i].points<arr[j].points){
                rank++;
            }
            else if (arr[i].points===arr[j].points && arr[i].GD<arr[j].GD){
                rank++;
            }
            else if (arr[i].points===arr[j].points && arr[i].GD===arr[j].GD && arr[i].name>arr[j].name){
                rank++;
            }
        }
        arr[i].position=rank;
    }
    console.log(arr)
    return arr;
}


bai_2([
    {
        name: "Arsenal",
        points: 99,
        GD: 45
    },
    {
        name: "Chelsea",
        points: 99,
        GD: 39
    },
    {
        name: "MU",
        points: 99,
        GD: 29
    },
    {
        name: "Liverpool",
        points: 99,
        GD: 39
    }
])


