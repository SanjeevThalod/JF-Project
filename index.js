function showcontent(name){
    var panel_item = document.getElementsByClassName('litem');
    for(var i = 0; i < panel_item.length; i++){
        panel_item[i].classList.remove('active');
    }
    var main_item = document.getElementsByClassName('main-item');
    for(var i = 0; i < main_item.length; i++){
        main_item[i].style.display = 'none';
    }
    document.getElementById(name).style.display = 'block';
    document.getElementById(name+'-link').classList.add('active');
}

const slide = document.getElementById('slide');
const left_panel = document.getElementById('Left-Panel')
slide.addEventListener('click',()=>{
    left_panel.style.transform = 'translateX(0px)';
    left_panel.style.width = '30%'
    afterclick();
});
const let_item = document.getElementsByClassName('litem');

function afterclick(){
    for(var i = 0; i < let_item.length; i++){
        let_item[i].addEventListener('click',()=>{
            left_panel.style.transform = 'translateX(-400px)';
            left_panel.style.width = '1%';
        });
    }
}

const cross = document.getElementById('cross');
const nav = document.getElementById('nav');
var menu = document.getElementById('menu');
menu.addEventListener('click',()=>{
    nav.style.right = '0px';
})
cross.addEventListener('click',()=>{
    nav.style.right = '-300px';
});