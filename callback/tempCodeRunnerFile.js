
function learnJS(lang, callback){
    console.log(`я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function(){
    console.log('Я прошел этот урок');
})