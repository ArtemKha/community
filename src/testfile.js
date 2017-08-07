import R from 'ramda'

const isValidAr = [{ag: 6}, {ag: 3}, {ag: 4}, {ag: 5}, {ag: 2}]
const isInvalidAr = [{ag: 3}, {ag: 4}, {ag: 6}, {ag: 1}]

const isFirstElementBiggest =
  R.sort(R.descend(R.prop('ag')))

console.log(isFirstElementBiggest(isValidAr))
console.log(isFirstElementBiggest(isInvalidAr))
