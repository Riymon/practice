let section_text = document.getElementById('s-text1');

let aside_ul_text = document.getElementById('a-ultext1');
let article_text = document.getElementById('a-text1');
text = "hello everyone";

let list = ["Jose","Pedro","Mark"];

function changeText(text){
    section_text.innerHTML = text;
    article_text.innerHTML = text;

}

function sbttn(){
    changeText(text);
    displaylist();
}

function displaylist() {
    aside_ul_text.innerHTML = '';
    for(let i = 0; i < list.length; i++){
        let li = document.createElement('li');
        li.innerHTML = list[i];
        aside_ul_text.appendChild(li);  
    }

}

let count = 0;

function fbutton(){

    let count_tag = document.getElementById('count');
    count++;

    count_tag.innerHTML = count;

    let h1 = document.createElement('h1');
    h1.textContent = "Count: " + count;
    count_tag.appendChild(h1);

}
