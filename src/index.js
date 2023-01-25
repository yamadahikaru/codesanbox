// /*
// const,let等の変数宣言
// */

// var vall = "var変数";
// console.log(vall);

// // var変数這は上書き可能

// vall = "var変数を上書き";
// console.log(vall);

// //var変数は再宣言可能

// var vall = "var変数を再宣言";
// console.log(vall);

// let val2 = 'let変数';
// console.log(val2);

// val2 = 'let変数を上書き';
// console.log(val2);

// let破砕宣言不可
// let val2 = 'let変数を再宣言';

// const  val3 = 'const変数';
// console.log(val3);

// coｎst変数は上書き不可
// val3 = "const変数を上書き";
// const val3 = "constを再宣言";

// const val4 = {
//   name : "じゃけ",
//   age : 24,
// };
// constで定義したオブジェクトはプロパティの変更が可能
// console.log(val4);

// val4.name= "jyak" ;
// console.log(val4);

// val4.address = "hiroshima";
// console.log(val4);

// constで定義したオブジェクトはプロパティの変更が可能。基本const使用

// const val5 = ['doc','cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列
// const named = "じゃけぇ";
// const age = 28;

// const message1 = `私の名前は${named}です。年齢は${age}歳です。`;
// console.log(message1);

// アロー関数

// 従来の関数
// function func1(str) {
//     return str;
// }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("テキスト"));

// // アロー関数
// const func2 = (str) => {
//     return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1,num2) => {
//     return num1 + num2 ;
// }
// console.log(func3(2,3));

// 分割代入
// const myProfile = {
//   named: "ひかる",
//   age: 29,
// };
// const message1 = `名前は${myProfile.named}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { named, age } = myProfile;
// const message2 = `名前は${named}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["ひかる", 29];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [named, age] = myProfile;
// const message4 = `名前は${namedf}です。年齢は${age}です。`;
// console.log(message4);

// デフォルト値（初期値）

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん!`);
// sayHello('ひかる');

// スプレッド構文...
// 配列の展開
// const arr1 =[1,2,3];
// // console.log(arr1);
// // console.log(...arr1);
// // 中身を順番に出して処理する

// const sumFunc = (num1 ,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4 , ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

// mapやfilterを使った配列の処理
// const nameArr = ["田中", "山田", "林"];
// for(let index = 0 ; index < nameArr.length; index++){
//     console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//     return name;
// })
// console.log(nameArr2);

// nameArr.map((name , index )=>console.log(`${index + 1 }番目は${name}です`));

// filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "山田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// 三項演算子
// ある条件 ? 条件がtrueのとき : 条件がfalseのとき
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num == "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : "許容範囲内です";
// };

// console.log(checkSum(20, 500));

// 論理演算子の本当の意味を知ろう　&& ||
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//     console.log('1か2はTrueになります');
// }
// if (flag1 && flag2) {
//     console.log('1も2もTrueになります');
// }

// ||の左側がfalseなら右側を返す。左側がtrueなら左側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "なにか設定されました";
// console.log(fee2);
