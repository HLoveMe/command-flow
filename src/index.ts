

function logParams(params: any) {
  return function (target: any, methodName: any, paramsIndex: any) {
    console.log(1, params);
    console.log(2, target);
    console.log(3, methodName);
    console.log(4, paramsIndex);

  }
}

class A{
  getData(@logParams('abcd') uuid: any) {
    console.log('我是getData里面的方法,uuid=', uuid);
  }
}

new A().getData(111);