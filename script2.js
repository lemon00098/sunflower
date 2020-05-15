/*Array.prototype.map()*/

//map() メソッドは、与えられた関数を配列のすべての要素に対して実行し、その結果からなる新しい配列を返します。

const items = [1,2,3,4,5];

const result = items.map(function(value){
  return value * 2;
});

console.log(result);

//出力結果
[2, 4, 6, 8, 10]

//forEachとの違いは「返り値」があるかどうか。
//forEach:返り値がない。
//map:返り値がある。

//forEachの場合・・・返り値がない
const result = [1,2,3].forEach(function(){
  return value * 2;
});

console.log(result);

//出力結果
undefined

//mapの場合・・・返り値がある
const result = [1,2,3].map(function(value){
  return value * 2;
});

console.log(result);

//出力結果
[2, 4, 6]

//「map」のコールバック関数
//コールバック関数は、要素の値、要素のインデックス、走査されている Array オブジェクトという 3 つの引数をともなって呼び出されます。

配列データ.map( function( value, index, array ) {

});

//value:配列の値
//index:配列のインデックス番号
//array: 現在処理している配列

const ary = [1, 2, 3, 4];

const newAry = ary.map(function(value, index, array){
  //一番最初の要素は変更を加えない
  if(index === 0){
    return value;
  }
  //元の配列に変更を加える
  ary[index] = value * value;
  return value * value;
});

console.log(newAry); //[1, 4, 9, 16]
console.log(ary);  //[1, 4, 9, 16]


//mapの第1引数にコールバック関数、第2引数にオブジェクト
var array = [ 配列データ ];

//第2引数にオブジェクトを指定
array.map( コールバック関数, オブジェクト );

const fruitsList = {
  'りんご':100,
  'パイナップル':200,
  'なし':120,
  'いちご':500,
  'キウイフルーツ':100
};

const order = ['いちご', 'キウイフルーツ'];
const result = order.map(function(value, index, array){
  return this[value];
}, fruitsList);

console.log(result); //(2) [500, 100]


/*Array.prototype.filter()*/

//filter() メソッドは、「引数として与えられたテスト関数」を各配列要素に対して実行し、そのテスト関数の条件に一致したすべての配列要素からなる新しい配列を生成します。
//例えば、数値データなら「○○以下の数値だけ」を抽出したり、文字データなら「○○と同じ文字列だけ」を抽出するような使い方。

const items = [5,2,7,8,3,1,6,8,4];

const result = items.filter(function(value){
  return value < 5;
});

console.log(result);
//[2, 3, 1, 4]

function overTwenty(value){
  return value >= 20;
}

var filed = [12, 4, 26, 130, 40].filter(overTwenty);
//[26, 130, 40]

//「filter」のコールバック関数は、3つの引数を引き取れる
var items = 配列データ;

items.filter( function( value, index, array ) {

})

const items = [9,9,4,6,4,7,1,3,2,4,1,6,8,8];

let result = items.filter(function(value, index, array){
  //インデックス番号を比較して重複データのみ排除
  return array.indexOf(value) === index;
});

console.log(result);
//[9, 4, 6, 7, 1, 3, 2, 8]

//filterは第2引数にオブジェクトを指定することができる

var items = 配列データ;

//第2引数にオブジェクトを指定
items.filter( コールバック関数, オブジェクト )



const fruits = {
  'りんご':120,
  'パイナップル':200,
  'メロン':600,
  'スイカ':1200,
  'ナシ':350,
  'いちご':400
};

const doubleItem = ['オムライス', 'いちご', 'ケーキ', 'タルト', 'スイカ'];

//両方に存在する食べ物だけ抽出
const result = doubleItem.filter(function(value, index){
  //オブジェクト内を繰り返す
  for(let item in this){
    //オブジェクトと配列の品名を比較する
    if(item === value) return value;
  }
}, fruits); //第2引数にオブジェクトを指定

console.log(result);
// ["いちご", "スイカ"]
