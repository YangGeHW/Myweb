var lxfs = document.querySelector('.lxfs')
var lxfs_btn = document.querySelector('#lxfs_btn')
var lxfs_flag = 0
lxfs_btn.onclick = function(){
    lxfs_flag = !lxfs_flag
    if(lxfs_flag == 0){

        lxfs.style.display = 'block';
    }
    else{
        lxfs.style.display = 'none'
    }
}
