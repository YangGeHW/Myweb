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
        getTime()
        setInterval(getTime,1000)
        function getTime(){
            
            var month = document.querySelector('#month')
            var day = document.querySelector('#day')
            var hour = document.querySelector('#hour')
            var minute = document.querySelector('#minute')
           
            var time = new Date()
            month.innerHTML = time.getMonth() + '月'
            day.innerHTML = time.getDay() + '日'
            hour.innerHTML = time.getHours() + '时'
            minute.innerHTML = time.getMinutes() + '分'
            
        }