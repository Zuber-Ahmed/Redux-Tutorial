// // let arr = [2,5,1,5,2,3,7,2];
// // let arr = ["google"];
// // console.log(typeof(arr));

// // arr.split(" ");
// // console.log(typeof(arr))

// // var counts = {};

// // // for (let word of arr) {
// // //   !counts[word] ? (counts[word] = 1) : counts[word]++;
// // // }

// // arr1.forEach(
// //     (item)=>!counts[item]?counts[item]=1:counts[item]++)
// // console.log(counts);

// // function check(arr) {
// //   let counts = {};
// //         // let result=arr.split("");
// //         arr.forEach((item) => (!counts[item] ? (counts[item] = 1) : counts[item]++));
// //        return arr
// //     }
// // }else{
// //     arr.forEach((item) => (!counts[item] ? (counts[item] = 1) : counts[item]++));
// //     return arr
// // }
// //   return counts;
// // }
// // arr=[2, 3, 4, 5, 3, 5, 33, 5, 3];

// // function check(arr) {
// //   const count = {};
// //   arr.forEach((item) => (!count[item] ? (count[item] = 1) : count[item]++));
// //   return count
// // }

// // console.log(check([2, 3, 4, 5, 3, 5, 33, 5, 3]));

// // for(var i=1; i<=5;i++){
// //     // var i=100
// //     setTimeout(function(){
// //         console.log(i);
// //     },1000)
// //     var i=100
// // }
// // console.log(1);
// // setTimeout(function(){console.log(2)},1000);
// // setTimeout(function(){console.log(3)},0);
// // console.log(4);

// // function x(){
// //     setTimeout(function(){
// //         console.log(i);
// //     },1000)
// //     var i=1

// // }
// // x()


// // obj1={a:10};
// // const obj2=obj1;
// // obj2.a=20;
// // console.log(obj1)
// // console.log(obj2)
// // let obj1;

// // console.log(undefined==null)

// //['foo', 'bar', 'foo', 'bar'] 

// var obj=['foo','bar', 'bar', 'foo', 'foo', 'foo', 'bar'] ;

// // let result =new Set([...obj])
// var ok=[];
// // let result =obj.filter((item,index)=> ok[item]==ok[item] && ok[item]!==ok[item]? true:false)



// console.log(result)

//===============================================================================================


// const arr=["foo","bar","bar","foo","foo","foo","bar"];

// const newArr=[];
// const newArr1={};

// for(let i=0; i<arr.length; i++){
//     if(i==0){
//         newArr.push(arr[i])
//     }else if(arr[i-1]==arr[i]){
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr);

// arr.forEach(item=> newArr1[item]=newArr1[item]? newArr1[item]+1:1)
// console.log(newArr1)



// /* 
// const nums=[1,2,2,1,3,4,1,1,4,4,2,2];

// const newArr=[];
// for(let i=0; i<nums.length; i++){
// if(i===0){
// newArr.push(nums[i]);
// }else{
//   if(nums[i-1]!==nums[i]){
//   newArr.push(nums[i]);
//   }
// }
// }
//  */
 
// /*  
//  const arr=["a","a","b","a","b","b","c"];
 

//  console.log(0.1 + 0.2 ==0.3); 
//  console.log(false == '0')
 
//  console.log(false === '0')
 
 
//   */
//  =============================================
 
//  /* const arr=["foo","bar","bar","foo","foo","foo","bar"];
 
//  const newArr=[];
 
//  for(let i=0; i<arr.length; i++){
 
//    if(i==0){
//    newArr.push(arr[i])
//    }else {
//    if(arr[i-1]!==i){
//      newArr.push(arr[i])
//    }
//    }
//  }
//  console.log(newArr); */
 
 
 
//  /* 
//  const nums=[1,2,2,1,3,4,1,1,4,4,2,2];
 
//  const newArr=[];
//  for(let i=0; i<nums.length; i++){
//  if(i===0){
//  newArr.push(nums[i]);
//  }else{
//    if(nums[i-1]!==nums[i]){
//    newArr.push(nums[i]);
//    }
//  }
//  }
//   */
  
//  /*  
//   const arr=["a","a","b","a","b","b","c"];
  
//   const newArr=[];
  
//   arr.forEach(item=>{
//   const filtered=newArr.filter(elm=>elm==item);
//   if(filtered.length===0){
//   newArr.push(item)
//   }
//   }) */
 
 
  
//  /* console.log(newArr) */
 
 
//  const arr=['car','cat','bat','car','bat','bat','cat'];
 
//  const obj={};
 
//  arr.forEach((item)=>obj[item]=obj[item]? obj[item]+1:1)
 
//  /* console.log(obj) */
 
 
//  let a='string';
//  const b=a.split('');
// //  console.log(b)
// var objnew='';

//  for(var i=a.length-1; i>=0; i--){
//  objnew=objnew+a[i]
//     return objnew
//  }
//  console.log(objnew)


 function revs(a){
    var newstr='';
    for(var i=a.length-1;i>=0;i--){
        newstr=newstr+a[i];
    }
    return newstr
 }
 console.log(revs("hello"));