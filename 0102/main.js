function write(...args) {
    for (const arg of args) {
        document.write(arg);
    }
    document.write("<br />");
}

/* Sample1 Example. */
write("***Sample1***")
one = 100;

function get() {
    one = 300;
    write("Function:", one);
}
get();
write("Golbal:", one);
write("");

/* Sample2 Example. */
write("***Sample2***")
let sports = "축구";
if (sports) {
    let sports = "농구";
    write("Block : ", sports);
}
write("Golbal : ", sports);
write("");

/* Sample3 Example. */
write("***Sample3***")
var music3 = "음악";
let sports3 = "축구";
write("this.music : ", this.music3);
write("this.sports :", this.sports3);
write("");

/* Sample4 Example. */
write("***Sample4***")
let sports4 = "축구", music4 = "재즈";

function get4() {
    let music2 = "클래식";
    write(music4);
    write(sports4);
}
get4();
write("");

/* Sample5 Example. */
write("***Sample5***")
var sports5 = "축구";
let music5 = "재즈";

function get5() {
    var sports5 = "농구";
    let music5 = "클래식";

    write("1: ", sports5);
    write("2: ", this.sports5);
    write("3: ", this.music5);
}
get5();
write("");

/* Sample6 Example. */
write("***Sample6***")
let sample6 = (one, two) => {
    return one + two
};
let result6 = sample6(1, 2);
write("result", result6);
write("");

let sample6_1 = (one, two) => one + two;
let reulst6_1 = sample6_1(1, 2);
write(reulst6_1);
write("")

/* Sample7 Example. */
write("***Sample7***")
let get7 = value => value + 10;
let result7_1 = get7(20);
write(result7_1);
write("")

let noParam7 = () => 3 + 4;
let result7_2 = noParam7();
write(result7_2);
write("")