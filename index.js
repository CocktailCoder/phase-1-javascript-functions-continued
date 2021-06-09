// Your code here
function saturdayFun (act ='roller-skate'){
    return `This Saturday, I want to ${act}!`
}

function mondayWork(todo='go to the office'){
    return `This Monday, I will ${todo}.`
}

function wrapAdjective(initialize = "*",){
    return function (string = 'special'){
        return (`You are ${initialize + string + initialize}!`);
    }
};