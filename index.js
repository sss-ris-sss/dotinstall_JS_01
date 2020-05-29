'use strict';

const num = 5;
const winner = Math.floor(Math.random() * num); //0～numのランダムな整数値。
                    //Math.random : 0以上1未満のランダムな小数
                    //Math.floor  : 小数点以下切り捨て

for (let i = 0; i < num; i++){
    const div = document.createElement('div'); //定数
    div.classList.add('box');
    div.textContent = i;

    div.addEventListener('click', () => {
        // あたりとはずれの処理
        if (i == winner){
            div.textContent = "WIN";
            div.classList.add('win');
        }else{
            div.textContent = "LOSE";
            div.classList.add('lose');
        }
        // div.classList.toggle('circle');
    });
    document.body.appendChild(div);     //bodyの子要素に追加。これがないとブラウザに表示されない
}
