let title = "\x1b[31m\x1b[1mTRASH GAME\x1b[0m";
const open = require("open")
const guild = "====================\n|   Các phím tắt   |\n| ↑: Lựa chọn trên |\n| ↓: Lựa chọn dưới |\n| A: Nhìn qua trái |\n| D: Nhìn qua phải |\n====================";
option = "menu";
const bed = "████████████████\n████████████████\n█████████████████████████████████████████████████████████████\n█████████████████████████████████████████████████████████████\n█████████████████████████████████████████████████████████████\n█████████████████████████████████████████████████████████████\n███                                                       ███\n███                                                       ███"
focusK = false;
const window = "█████████=====█████████\n█████████     █████████\n█████████_____█████████"
const door = "████████████████"
direct = null;
rotated = false;
joinGame = false;
var mod;
var skip;
var start;
var start2;
var start4;
var start5;
var start6;
function menu() {
    return game = setInterval(() => {
        process.stdout.write("\x1B[?25l");
        console.clear();
        for (var j = 0; j < ((process.stdout.columns - title.length + 14) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(title);
        for (var k = 0; k < ((process.stdout.rows) / 2); k++) {
            process.stdout.write("\n");
        }
        console.log(guild)
        if (option == "menu") {
            for (var j = 0; j < ((process.stdout.columns - "Start".length - 4) / 2); j++) {
                process.stdout.write(" ");
            }
            console.log("\x1b[42m\x1b[1m> START <\x1b[0m");
        } else {
            for (var j = 0; j < ((process.stdout.columns - "Start".length) / 2); j++) {
                process.stdout.write(" ");
            }
            console.log("\x1b[0mStart");
        }
        if (option == "exit") {
            for (var j = 0; j < ((process.stdout.columns - "Exit".length - 4) / 2); j++) {
                process.stdout.write(" ");
            }
            console.log("\x1b[42m\x1b[1m> EXIT <\x1b[0m");
        } else {
            for (var j = 0; j < ((process.stdout.columns - "Exit".length) / 2); j++) {
                process.stdout.write(" ");
            }
            console.log("\x1b[0mExit");
        }
        console.log("\n\n\n\n\n\n\n@LNTK")
    }, 100);
}
menu();
var readline = require('readline');

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY)
    process.stdin.setRawMode(true);

process.stdin.on('keypress', (chunk, key) => {
    if (key.name == 'up') {
        if (option !== null) {
            if (option == "menu") {
                option = "exit"
            } else if (option == "exit") {
                option = "menu"
            }
        }
    }
    else if (key.name == "down") {
        if (option !== null) {
            if (option == "menu") {
                option = "exit"
            } else if (option == "exit") {
                option = "menu"
            }
        }
    } else if (key.name == "q" || key && key.ctrl && key.name == 'c') {
        clearInterval(game);
        console.clear();
        process.exit();
    } else if (key.name == "return") {
        if (option !== null) {
            if (option == "menu") {
                clearInterval(game);
                console.clear();
                option = null;
                loadingAnimation();
            } else if (option == "exit") {
                clearInterval(game);
                option = null;
                console.clear()
                process.exit();
            }
        }
    }

});

arr = [];
arr2 = [];
function handleArray(val) {
    val = val.join('');
    if (!arr.includes(val)) {
        return arr.push(val);
    }
}

function handleArray2(val) {
    val = val.join('');
    if (!arr2.includes(val)) {
        return arr2.push(val);
    }
}

function handleText(text) {
    for (i = 0; i < text.length; i++) {
        ab = text.split("");
        ab[i] = "\x1b[0m\x1b[35m\x1b[41m\x1b[1m" + ab[i].toUpperCase() + "\x1b[0m\x1b[32m\x1b[41m";
        ab.join(" ");
        handleArray2(ab);
    }
}

ar = [];
arC = [];
var content = "";
isConfirm = false;
function displayText(text) {
    content = text;
    focusK = true;
    option = "yes"
    var m = 0;
    arr1 = text.split("");
    for (i = 0; i < arr1.length; i++) {
        if (i == 0) {
            ar.push(arr1[0] + "_")
        } else {
            ar.push(text.substr(0, i) + arr1[i] + "_")
        }
    }
    return anima = setInterval(() => {
        process.stdout.write("\x1B[?25l");
        if (m < ar.length && skip == false) {
            focusK = true;
            console.clear();
            for (var k = 0; k < (process.stdout.rows / 2); k++) {
                process.stdout.write("\n");
            }

            for (var j = 0; j < ((process.stdout.columns - text.length) / 2); j++) {
                process.stdout.write(" ");
            }
            console.log(ar[m]);
            m++;
        } else {
            process.stdout.write("\x1B[?25l");
            focusK = false;
            clearInterval(anima);
            ar = [];
            start = setInterval(() => {
                console.clear();
                for (var k = 0; k < ((process.stdout.rows) / 2); k++) {
                    process.stdout.write("\n");
                }
                for (var j = 0; j < ((process.stdout.columns - text.length) / 2); j++) {
                    process.stdout.write(" ");
                }
                console.log(text + "\n");
                if (option == "yes") {
                    for (var j = 0; j < ((process.stdout.columns - "Yes".length) / 2); j++) {
                        process.stdout.write(" ");
                    }
                    console.log("\x1b[42m\x1b[1mYES\x1b[0m");
                } else {
                    for (var j = 0; j < ((process.stdout.columns - "Yes".length) / 2); j++) {
                        process.stdout.write(" ");
                    }
                    console.log("\x1b[0mYes");
                }
                if (option == "no") {
                    for (var j = 0; j < ((process.stdout.columns - "No".length) / 2); j++) {
                        process.stdout.write(" ");
                    }
                    console.log("\x1b[41m\x1b[1mNO\x1b[0m");
                } else {
                    for (var j = 0; j < ((process.stdout.columns - "No".length) / 2); j++) {
                        process.stdout.write(" ");
                    }
                    console.log("\x1b[0mNo");
                }
            }, 100);

        }
    }, 50);
}

function displayWindow() {
    start4 = setInterval(() => {
        process.stdout.write("\x1B[?25l");
        console.clear();
        for (var k = 0; k < ((process.stdout.rows) / 2); k++) {
            process.stdout.write("\n");
        }
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[0]);
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);      
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);  
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);  
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);  
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);  
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);  
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);  
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);  
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);  
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);
                for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[1]);
        for (var j = 0; j < ((process.stdout.columns - window.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(window.split("\n")[2]);                                                                                
    }, 100);
}

function displayBed() {
    process.stdout.write("\x1B[?25l");
    start5 = setInterval(() => {
        console.clear();
        for (var k = 0; k < ((process.stdout.rows) / 2); k++) {
            process.stdout.write("\n");
        }
        for (var j = 0; j < ((process.stdout.columns - bed.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(bed.split("\n")[0])
        for (var j = 0; j < ((process.stdout.columns - bed.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(bed.split("\n")[1])
        for (var j = 0; j < ((process.stdout.columns - bed.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(bed.split("\n")[2])
        for (var j = 0; j < ((process.stdout.columns - bed.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(bed.split("\n")[3])
        for (var j = 0; j < ((process.stdout.columns - bed.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(bed.split("\n")[4])
        for (var j = 0; j < ((process.stdout.columns - bed.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(bed.split("\n")[5])
        for (var j = 0; j < ((process.stdout.columns - bed.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(bed.split("\n")[6])
        for (var j = 0; j < ((process.stdout.columns - bed.split("\n")[0].length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(bed.split("\n")[7])
    }, 100);
}

function displayDoor() {
    start6 = setInterval(() => {
        process.stdout.write("\x1B[?25l");
        console.clear();
        for (var k = 0; k < ((process.stdout.rows) / 2); k++) {
            process.stdout.write("\n");
        }
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
                for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
                for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
        for (var j = 0; j < ((process.stdout.columns - door.length) / 2); j++) {
            process.stdout.write(" ");
        }
        console.log(door);
    }, 100);
}

function displayConfirm(text) {
    content = text;
    focusK = true;
    isConfirm = true;
    option = "yes";
    var m = 0;
    arraysecond = text.split("");
    for (i = 0; i < arraysecond.length; i++) {
        if (i == 0) {
            arC.push(arraysecond[0] + "_")
        } else {
            arC.push(text.substr(0, i) + arraysecond[i] + "_")
        }
    }
    anima2 = setInterval(() => {
        process.stdout.write("\x1B[?25l");
        if (m < arC.length && skip == false) {
            focusK = true;
            console.clear();
            for (var k = 0; k < ((process.stdout.rows) / 2); k++) {
                process.stdout.write("\n");
            }
            for (var j = 0; j < ((process.stdout.columns - text.length) / 2); j++) {
                process.stdout.write(" ");
            }
            console.log(arC[m]);
            m++;
        } else {
            focusK = false;
            clearInterval(anima2);
            process.stdout.write("\x1B[?25l");
            arC = [];
            start2 = setInterval(() => {
                console.clear();
                for (var k = 0; k < ((process.stdout.rows) / 2); k++) {
                    process.stdout.write("\n");
                }
                for (var j = 0; j < ((process.stdout.columns - text.length) / 2); j++) {
                    process.stdout.write(" ");
                }
                console.log(text + "\n");
                if (option == "yes") {
                    for (var j = 0; j < ((process.stdout.columns - "done".length) / 2); j++) {
                        process.stdout.write(" ");
                    }
                    console.log("\x1b[42m\x1b[1mCONFIRM\x1b[0m");
                }
            }, 100);

        }
    }, 50);
}

var readline = require('readline');

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY)
    process.stdin.setRawMode(true);

process.stdin.on('keypress', (chunk, key) => {
    if (isConfirm == false) {
        if (key.name == 'up') {
            if (option !== null) {
                if (option == "yes") {
                    option = "no"
                } else if (option == "no") {
                    option = "yes"
                }
            }
        }
        else if (key.name == "down") {
            if (option !== null) {
                if (option == "yes") {
                    option = "no"
                } else if (option == "no") {
                    option = "yes"
                }
            }
        }
    }

    if (joinGame== true) {
        if (key.name == "d") {//Phai
            clearInterval(anima);
            clearInterval(anima2);
            clearInterval(start)
            clearInterval(start2)          
            if (direct == null) {
                direct = "pc";
            }
            if (direct == "pc") {
                displayWindow();
                direct = "window";
                if (start6 !== null) {
                    clearInterval(start6);
                }
                if (start5 !== null) {
                    clearInterval(start5);
                }

            }
            else if (direct == "window") {
                direct = "bed";
                displayBed()
                if (start4 !== null) {
                    clearInterval(start4);
                }
                if (start6 !== null) {
                    clearInterval(start6);
                }
            }
            else if (direct == "bed") {
                direct = "door";
                displayDoor()
                if (start4 !== null) {
                    clearInterval(start4);
                }
                if (start5 !== null) {
                    clearInterval(start5);
                }
            }
            else if (direct == "door") {
                direct = "pc";
                if (start6 !== null) {
                    clearInterval(start6);
                }                              
                if (start4 !== null) {
                    clearInterval(start4);
                }
                if (start5 !== null) {
                    clearInterval(start5);
                }
                skip = true;
                if(mod == "yn"){
                    displayText(content);
                }else if(mod == "confirm"){
                    displayConfirm(content);
                }
                
            }
        }        
        if (key.name == "a") {//Trai
            clearInterval(anima);
            clearInterval(anima2);
            clearInterval(start)
            clearInterval(start2)          
            if (direct == null) {
                direct = "pc";
            }
            if (direct == "pc") {
                displayDoor();
                direct = "door";
                if (start4 !== null) {
                    clearInterval(start4);
                }
                if (start5 !== null) {
                    clearInterval(start5);
                }

            }
            else if (direct == "door") {
                direct = "bed";
                displayBed()
                if (start4 !== null) {
                    clearInterval(start4);
                }
                if (start6 !== null) {
                    clearInterval(start6);
                }
            }
            else if (direct == "bed") {
                direct = "window";
                displayWindow()
                if (start6 !== null) {
                    clearInterval(start6);
                }
                if (start5 !== null) {
                    clearInterval(start5);
                }
                if (start !== null) {
                    clearInterval(start);
                }  
                if (start2 !== null) {
                    clearInterval(start2);
                } 
            }
            else if (direct == "window") {
                direct = "pc";
                if (start6 !== null) {
                    clearInterval(start6);
                }                           
                if (start4 !== null) {
                    clearInterval(start4);
                }
                if (start5 !== null) {
                    clearInterval(start5);
                }
                skip = true;
                if(mod == "yn"){
                    displayText(content);
                }else if(mod == "confirm"){
                    displayConfirm(content);
                }
                
            }
        }
    }

    if (key.name == "q" || key && key.ctrl && key.name == 'c') {
        clearInterval(start);
        console.clear()
        process.exit();
    } else if (key.name == "return") {
        if (option !== null && focusK == false) {
            skip = false;
            if (option == "yes") {
                if (isConfirm == true && focusK == false) {
                    
                    if (start !== null) {
                        clearInterval(start);
                    }
                    if (start2 !== null) {
                        clearInterval(start2);
                    }
                    if (start4 !== null) {
                        clearInterval(start4);
                    }
                    if (start5 !== null) {
                        clearInterval(start5);
                    }
                    if (start6 !== null) {
                        clearInterval(start6);
                    }
                    isConfirm = false;
                } else {
                    if (start !== null) {
                        clearInterval(start);
                    }
                }
                option = null;
                console.clear();
                switch (content) {
                    case "Bắt đầu chứ?":
                        displayText("Bạn đang có một ngày tốt lành không?");
                        joinGame = true;
                        mod = "yn";
                        break;
                    case "Bạn đang có một ngày tốt lành không?":
                        displayText("Bạn có nhiều trách nhiệm trong cuộc sống không?");
                        break;
                    case "Bạn có nhiều trách nhiệm trong cuộc sống không?":
                        mod = "confirm"
                        displayConfirm("Nhìn xung quanh phòng của bạn một chút đi!");
                        break;
                    case "Nhìn xung quanh phòng của bạn một chút đi!":
                        mod = "yn"
                        displayText("Bạn có thấy quen thuộc không?");
                        break;
                    case "Bạn có thấy quen thuộc không?":
                        mod = "yn"
                        displayText("Bạn có biết bạn đang ở đâu không?");
                        break;
                    case "Bạn có biết bạn đang ở đâu không?":
                        mod = "yn"
                        displayText("Bạn đã bao giờ bị tấn công bất ngờ chưa?");
                        break;
                    case "Bạn đã bao giờ bị tấn công bất ngờ chưa?":
                        mod = "yn"
                        displayText("Bạn có bao giờ tự hỏi tại sao bạn tồn tại chưa?");
                        break;
                    case "Bạn có bao giờ tự hỏi tại sao bạn tồn tại chưa?":
                        mod = "yn"
                        displayText("Bạn có tin vào chúa không?");
                        break;
                    case "Bạn có tin vào chúa không?":
                        mod = "yn"
                        displayText("Bạn có cảm thấy thoải mái khi ở trong phòng một mình không?");
                        break;
                    case "Bạn có cảm thấy thoải mái khi ở trong phòng một mình không?":
                        mod = "yn"
                        displayText("Nếu đèn bỗng dưng tắt thì bạn có giật mình không?");
                        break;
                    case "Nếu đèn bỗng dưng tắt thì bạn có giật mình không?":
                        mod = "yn"
                        displayText("Bạn có kẻ thù nào không?");
                        break;
                    case "Bạn có kẻ thù nào không?":
                        mod = "yn"
                        displayText("Nếu bạn bỗng dưng mất tích, mọi người có đi tìm bạn không?");
                        break;
                    case "Nếu bạn bỗng dưng mất tích, mọi người có đi tìm bạn không?":
                        mod = "yn"
                        displayText("Nếu bạn hét lên, mọi người sẽ nghe thấy chứ?");
                        break;
                    case "Nếu bạn hét lên, mọi người sẽ nghe thấy chứ?":
                        mod = "yn"
                        displayText("Bạn có muốn biết mọi chuyện đang xảy ra không?");
                        break;
                    case "Bạn có muốn biết mọi chuyện đang xảy ra không?":
                        mod = "confirm"
                        displayConfirm("Nhìn ra đằng sau đi!");
                        break;
                    case ("Nhìn ra đằng sau đi!"):
                        mod = "confirm"
                        displayConfirm("Cảm ơn đã chơi game của Kiên cảm ơn nhiều vãi lều :() !");
                        open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                        break;
                    case "Oh bạn khá ít trách nhiệm nhỉ? Nhìn xung quanh phòng của bạn một chút đi!":
                        mod = "yn"
                        displayText("Bạn có thấy quen thuộc không?");
                        break;
                    case "Oh bạn đang có một ngày tồi tệ. Vậy bạn có nhiều trách nhiệm trong cuộc sống không?":
                        mod = "confirm"
                        displayConfirm("Nhìn xung quanh phòng của bạn một chút đi!");
                        break;
                }

            } else if (option == "no") {
                if (isConfirm == true) {
                    clearInterval(start2);
                    isConfirm = false;
                } else {
                    clearInterval(start);
                }
                option = null;
                console.clear();
                switch (content) {
                    case "Bạn đang có một ngày tốt lành không?":
                        mod = "yn"
                        displayText("Oh bạn đang có một ngày tồi tệ. Vậy bạn có nhiều trách nhiệm trong cuộc sống không?");
                        break;
                    case "Bạn có nhiều trách nhiệm trong cuộc sống không?":
                        mod = "confirm"
                        displayConfirm("Oh bạn khá ít trách nhiệm nhỉ? Nhìn xung quanh phòng của bạn một chút đi!");
                        break;
                    case "Oh bạn đang có một ngày tồi tệ. Vậy bạn có nhiều trách nhiệm trong cuộc sống không?":
                        mod = "confirm"
                        displayConfirm("Oh bạn khá ít trách nhiệm nhỉ? Nhìn xung quanh phòng của bạn một chút đi!");
                        break;
                    case "Bạn có thấy quen thuộc không?":
                        mod = "yn"
                        displayText("Bạn có biết bạn đang ở đâu không?");
                        break;
                    case "Bạn có biết bạn đang ở đâu không?":
                        mod = "yn"
                        displayText("Bạn đã bao giờ bị tấn công bất ngờ chưa?");
                        break;
                    case "Bạn đã bao giờ bị tấn công bất ngờ chưa?":
                        mod = "yn"
                        displayText("Bạn có bao giờ tự hỏi tại sao bạn tồn tại chưa?");
                        break;
                    case "Bạn có bao giờ tự hỏi tại sao bạn tồn tại chưa?":
                        mod = "yn"
                        displayText("Bạn có tin vào chúa không?");
                        break;
                    case "Bạn có tin vào chúa không?":
                        mod = "yn"
                        displayText("Bạn có cảm thấy thoải mái khi ở trong phòng một mình không?");
                        break;
                    case "Bạn có cảm thấy thoải mái khi ở trong phòng một mình không?":
                        mod = "yn"
                        displayText("Nếu đèn bỗng dưng tắt thì bạn có giật mình không?");
                        break;
                    case "Nếu đèn bỗng dưng tắt thì bạn có giật mình không?":
                        mod = "yn"
                        displayText("Bạn có kẻ thù nào không?");
                        break;
                    case "Bạn có kẻ thù nào không?":
                        mod = "yn"
                        displayText("Nếu bạn bỗng dưng mất tích, mọi người có đi tìm bạn không?");
                        break;
                    case "Nếu bạn bỗng dưng mất tích, mọi người có đi tìm bạn không?":
                        mod = "yn"
                        displayText("Nếu bạn hét lên, mọi người sẽ nghe thấy chứ?");
                        break;
                    case "Nếu bạn hét lên, mọi người sẽ nghe thấy chứ?":
                        mod = "yn"
                        displayText("Bạn có muốn biết mọi chuyện đang xảy ra không?");
                        break;
                    case "Bạn có muốn biết mọi chuyện đang xảy ra không?":
                        mod = "confirm"
                        displayConfirm("Cảm ơn đã chơi game của Kiên cảm ơn nhiều vãi lều :() !");
                        open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                        break;
                }
            }
        }
    }

});

function loadingAnimation(text = "Loading...", signal = "█", seconds = 1) {
    var i = 0;
    var m = 0;
    var time = 0;
    res = "";
    c = [];
    var per = 0;
    text = text.toLowerCase();
    for (i = 0; i < text.length; i++) {
        str = text.split("");
        if (str[i] == ".") {
            str[i] = "\x1b[0m\x1b[35m\x1b[1m" + "o" + "\x1b[0m\x1b[32m";
        }
        str[i] = "\x1b[0m\x1b[35m\x1b[1m" + str[i].toUpperCase() + "\x1b[0m";

        str.join("");
        handleArray(str);
    }
    for (per = 0; per <= 100; per++) {
        if (per % 5 == 0) {
            res = res + signal;
            c.push(res + `]( ${per} %)`);
        }
    }


    return loading = setInterval(() => {
        if (m < c.length) {
            i = (i > arr.length - 1) ? 0 : i;
            console.clear();
            for (k = 0; k < ((process.stdout.rows) / 2); k++) {
                process.stdout.write("\n");
            }
            for (j = 0; j < ((process.stdout.columns - text.length) / 2); j++) {
                process.stdout.write(" ");
            }
            console.log(arr[i++]);
            for (j = 0; j < (((process.stdout.columns - "[....................]01%".length)) / 2); j++) {
                process.stdout.write(" ");
            }
            process.stdout.write("[");
            console.log(c[m]);
            m++
        } else {
            console.clear();
            clearInterval(loading);
            console.log("DONE");
            displayConfirm("Bắt đầu chứ?");

        }
    }, (1 * seconds * 10000) / 100);

}