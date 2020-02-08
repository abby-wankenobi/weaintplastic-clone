$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

// if ($(window).width() > 600) {
//     menu.hover( function() {
//         menuNav.slideDown( 'medium' );
//         menuNav.css( 'display', 'flex' );
//     } );
// 
//     menu.mouseleave( function() {
//         menuNav.slideUp( 'medium');
//     } );
// }

$(document).ready(function() {  
    
    // $(this).scrollTop(0);
    
    ////// NAV MENU //////
    const menuBtn = $( '.menu-btn' );
    const menu = $( '.menu' );
    const menuNav = $( '.menu-nav' );
    const navItem = $( '.nav-item' );

    // Set Initial State of Menu 
    let showMenu = false;

    menuBtn.on( 'click', toggleMenu );

    function toggleMenu() {
        if( !showMenu ) {
          if ($(window).width() < 650) {
            menuBtn.addClass( 'close' )
            menuNav.addClass( 'mobile' ); 
            menuNav.css( 'display', 'flex' );
            
          }
            menu.addClass( 'show' );
            menuNav.addClass( 'show' );
            navItem.addClass( 'show' );
            
            showMenu = true;
        } else {
          if ($(window).width() > 650) {
            menuNav.removeClass( 'mobile' );
          }
            menu.removeClass( 'show' );
            menuNav.removeClass( 'show' );
            navItem.removeClass( 'show' );
            menuBtn.removeClass( 'close' )
            showMenu = false;
        }
    }
    
    function toggleNavbarMethod() {  
        if ($(window).width() > 650) {  
            menuNav.removeClass( 'mobile' );
            menuNav.css( 'transition', 'none' ); 
            menu.on('mouseover', function(){  
                menuNav.slideDown( 'medium' ); 
                menuNav.css( 'display', 'flex' );  
            }).on('mouseleave', function(){  
                menuNav.slideUp( 'medium');  
            });  
        }  
        else {  
            menu.off('mouseover').off('mouseout');
            menuNav.addClass( 'mobile' ); 
            menuNav.css( 'transition', '.4s cubic-bezier(.77,0,.175,1)' );    
        }  
    }  
    toggleNavbarMethod();  
    $(window).resize(toggleNavbarMethod);  
    
    
    
    /////// SVG ANIMATIONS ///////
    const logo = $( '#svg_logo path' );
    logo.each( i => console.log(`Letter ${i} is ${logo[i].getTotalLength()}`))
    
    $(window).scroll(function () {
        $('.onscroll-animation').each(function () {
            var imagePos = $(this).offset().top;
            var imageHeight = $(this).height();
            var topOfWindow = $(window).scrollTop();
            
            console.log('position', imagePos, 'height', imageHeight, 'top', topOfWindow )

            if (imagePos < topOfWindow + ( imageHeight + 400 ) && imagePos + imageHeight > topOfWindow) {
                $(this).addClass("svg-animation");
            } else {
                $(this).removeClass("svg-animation");
            }
        });
    });
}); 