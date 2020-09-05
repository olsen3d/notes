/* eslint-disable eol-last */
/* eslint-disable no-new */
/* eslint-disable no-multiple-empty-lines */



function CreateCharacter (job, weapon) {
    this.job = job
    this.weapon = weapon
}

CreateCharacter.prototype.changeJob = function (job) {
    this.job = job
}

CreateCharacter.prototype.attack = function () {
    console.log('attacking!!')
}





const mike = new CreateCharacter('cleric', 'staff')

console.log(mike)


//