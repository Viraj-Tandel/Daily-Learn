const input = [3,2,1,5,0,5];

function bubbleSortArray(data){
    const n = data.length;
    for(let x = 0; x < n-1; x++){
        for (let y = 0; y < n- x-1; y++){
            if(data[y] > data[y+1]){
                let temp = data[y];
                data[y] = data[y+1];
                data[y+1] = temp;
            }
        }
    }
    return data;
}

console.log("🚀 ~ Sorted Array:", bubbleSortArray(input));
