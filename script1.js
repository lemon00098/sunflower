let obj = {
  name: 'ひまわり',
  gender: '女性',
  birth: '1982/05/09',
  mail: 'sunflower@mail.co.jp'
}

console.log(obj.name);
console.log(obj['gender']);
obj.hobby = 'プログラミング';
delete obj.mail;
console.log(obj);
