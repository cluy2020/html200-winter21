let firstname = 'Chan'
let lastname = 'Luy'
let age = 30
const canDrive = 18

if (age - canDrive >= 0) {
  console.log(firstname + ' ' + lastname + ' can drive, and has driven for ' + (age - canDrive) + ' years')
}

else {
  console.log(firstname + ' ' + lastname + ' cannot drive. They need ' + (canDrive - age) + ' more years to drive')
}
