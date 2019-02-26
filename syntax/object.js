var member = ['gonny', 'egoing', 'ydm'];

console.log(member[1]); // egoing

var i = 0;

while (i < member.length) {
  console.log('array loop', member[i]);
  i++;
}

var roles = {
  'Jprogrammer': 'gonny',
  'Sprogrammer': 'egoing',
  'friend': 'ydm'
}
console.log(roles.Jprogrammer);
console.log(roles['Jprogrammer']);

for(var name in roles){
  console.log('object =>', name, 'value  =>', roles[name]);
}