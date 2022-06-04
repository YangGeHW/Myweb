// var lxfs = document.querySelector('.lxfs')
var lxfs = document.querySelector('#lxfs_btn')
console.log(lxfs);
lxfs.onmouseover = function(){
    console.log(this.children);
    this.children[1].style.display = 'block'
}
lxfs.onmouseout = function(){
    this.children[1].style.display = 'none'
}