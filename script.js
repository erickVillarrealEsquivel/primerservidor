function multiply(n1,n2){
 let result=0;
 for(let i=0;i<n2;i++){
 result+=n1;
 }
 return result;
}

let finalResult=multiply(5,4);
console.log(finalResult);

//define division
function divide(n1,n2){
  let result=1;
  while((n1-n2)>0){
    result++;
    n1-=n2;
  }
  return result;
  }

//define 20/4=5
finalResult=divide(20,4);
console.log(finalResult);

//define (5*4)/10
finalResult=divide(multiply(5,4),10);
console.log(finalResult);

//Define ((5*4)/10)*6
finalResult=multiply(divide(multiply(5,4),10),6);
console.log(finalResult);

//E5 callbacks => funcion asincrona que tiene dos eventos en si y de error y otro de exito
function multiplyCallBack(success,error){
try{
  let n1=arguments[2]
  let n2=arguments[3]
  if(n1==null ||n2==null ){
    throw("necesita 2 argumentos");
  }
  let result=multiply(n1,n2);
  success(result);
  }
  catch(e){
    error(e);
  }
}

function okCallBack(result){
  console.log(result);
}
function errorCallBack(error){
    console.log(error);
}
console.log("******calbacks*********");
multiplyCallBack(okCallBack,errorCallBack,5,4);

multiplyCallBack(okCallBack,errorCallBack,5);



//define(5*4)*4=80
}
multiplyCallBack((result)=>{multiplyCallBack(okCallBack,errorCallBack,result,4);},errorCallBack,5,4);

function divideCallBack(success,error){
  try{
    let n1=arguments[2]
    let n2=arguments[3]
    if(n1==null ||n2==null ){
      throw("necesita 2 argumentos");
    }
    let result=divide(n1,n2);
    success(result);
    catch(e){
      error(e);
    }
}

//define 20/4=5
divideCallBack(okCallBack,errorCallBack,20,4);

//define(5*4)/10=2
multiplyCallBack((result)=>{
  divideCallBack(okCallBack,errorCallBack,result,10);
},errorCallBack,5,4);


//define((5*4)*10)*5=
multiplyCallBack((result)=>{
  divideCallBack((result)=>{
    multiplyCallBack(okCallBack,errorCallBack,result,5);
  }  ,errorCallBack,result,10);
},errorCallBack,5,4);


//ES6 promies=> new Promies();
function multiplyPrimise(result){
return new Promise((resolve,reject)=>{
  if(result.n1 ==null ||result.n2==null){
    throw("necesita 2 argumentos");
  }  else{
    let r=new Object();
    r.res=multiply(result.n1,result.n2);
    resolve(r);
  }
  });
  }

  //define 5*4=20
let numbers =new Object();
numbers.n1=5;
numbers.n2=4;
multiplyPrimise(numbers).then(okCallBack).catch(errorCallBack);

function dividePromise(result){
  return new Promise((resolve,reject)=>{
    if(result.n1 ==null ||result.n2==null){
      throw("necesita 2 argumentos");
    }  else if(result.n2!=0){
      let r=new Object();
      r.res=divide(result.n1,result.n2);
      resolve(r);
    }else {
      throw("division entre 0");
    }
    });
    }

//define 20/4=5
numbers.n1=20;
dividePromise(numbers).then(okCallBack).catch(errorCallBack);



//define ((5*4)/10)*5
numbers.n1=5;
numbers.n2=4;

multiplyPrimise(numbers)
.then((data)=>{
data.n1=data.res;
  data.n2=10;
  return dividePromise(data);
})
.then((data)=>{
  data.n1=data.res;
data.n2=5;
return multiplyPrimise(data);
})
.then(okCallBack)
.catch(errorCallBack);

//async - await

async function operations() {
  try {
    let num=new Object();
    num.n1=5;
    num.n2=4;
    let val1=await multiplyPrimise(num);
    num.n1=val1.res;
    num.n2=10;
    let val2=await dividePromise(num);
    num.n1=val2.res;
    num.n2=5;
    let val3=await multiplyPrimise(num);
    okCallBack(val3.res);
  } catch (e) {
    errorCallBack(e);
}
}

  operations();
