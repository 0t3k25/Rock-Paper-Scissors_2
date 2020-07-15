'use strict'

function myGame(){
    my_num = document.getElementById('mySelect').selectedIndex;
    cpu_num = Math.floor(Math.random() * 3);
    if(cpu_num === 0){
        cpu_hand = "グー";
    }
    if(cpu_num === 1){
        cpu_hand = "チョキ";
    }
    if(cpu_hand){
        cpu_hand = "パー";
    }
    if(my_num - cpu_hand){
        
    }
}