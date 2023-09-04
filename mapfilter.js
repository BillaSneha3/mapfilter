//concatination

let array1 = [1,2,"sneha","python",3,10];
let array2 = [5,99,"React"];
for(i=0;i<array1.length;i++){
    if(array1.length === array2.length){
        let concatedArray=array1.concat(array2);
        console.log(concatedArray);
    }
    else{
        console.log(array1);
    }
}

// join

for (i=0;i<3;i++){
    if(array1.length>=4){
        let joinedArray=array1.join("$$");
        console.log(joinedArray);
    }
    else{
        console.log(array1);
    }
}

//map

let mappedArray=array1.map(function(a,i){
    console.log("hi",a,i);
    return a*2
});
console.log(mappedArray);

//filter

let filteredArray=array1.filter(function(a){
    console.log("Hello",a);
    if(a%2===0){
        return true;
    }
    else{
        false;
    }
})
console.log(filteredArray);

//indexof and includes

let indexedValue=array1.indexOf("sneha");
let includedValue=array1.includes("sneha");
console.log(indexedValue);
console.log(includedValue);
if(indexedValue===2 && includedValue===true){
    console.log("two values are included");
}
    else{
        console.log("two values are  not included");
    }

    
let nestedArray=[[1,2,3],[4,5,6],[7,8,9]];
console.log(nestedArray);
//updation

nestedArray[0][1]=22;
console.log(nestedArray);





    