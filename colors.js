var Links = {
    LinksetColor : function (color){
   /*  let alist= document.querySelectorAll('a');
        let i = 0;
        while(i < alist.length){
            alist[i].style.color = color;
            i = i+1;
        } */
        $('a').css('color',color);
    }
}
var Body = {
    setFontColor : function (color){
    $('body').css('color',color)
        //document.querySelector('body').style.color= color;
},
setBackgroundColor :  function (color){
    $('body').css('backgroundColor',color)
    //document.querySelector('body').style.backgroundColor = color;//selector 란 css 를 바꿀때 쓴다.
}
}



function Night_DayHandler(self){
    if(self.value === 'day'){
      Body.setBackgroundColor('white');
      Body.setFontColor('black');
        self.value = 'night';
        Links.LinksetColor('blue')
    }else{
        Body.setBackgroundColor('black');
        Body.setFontColor('white')
        self.value = 'day';
        Links.LinksetColor('powderblue')
    }
}
