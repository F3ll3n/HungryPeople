$( document ).ready(function(){
        $('li').animate({
            'marginTop': '-2px',
            'opacity': '1'
        }, 800);
        $('.modal_button').click(function(){
            $('.modal').css({
                'display': 'flex'
            }, 800);
        });
        $('i').click(function(){
            $('.modal').css({
                'display': 'none',
                
            })
        })
        $('.line').ready(function(){
            $('.line').animate({
                'opacity': '1'
            }, 800)
        })
    //$('.modal_button').click(function(){
      //  $('.modal-animate').css({
        //    'display': 'flex',
          //  'width': '1000px',
            //'opacity': '1'
        //},800);
        //$('.modal_animate').css({
          //  'margin': '0 auto',
            //'transition': '0.3s'
       // },800)
    //});
});