var isBoolean = true;
var age = 42;
var job = "Web Developer";
//type any pour variable multi typé
var truc = 42;
truc = "truc";
//enumération
var Nothing;
(function (Nothing) {
    Nothing["RIEN"] = "Rien";
    Nothing["NADA"] = "Nada";
    Nothing["NICHT"] = "Nicht";
    Nothing["NENTRA"] = "Nentra";
})(Nothing || (Nothing = {}));
var n = Nothing.NADA;
console.log(n);
