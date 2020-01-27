// Select DOM Items




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
    
    const menuBtn = $( '.menu-btn' );
    const menu = $( '.menu' );
    const menuNav = $( '.menu-nav' );
    const navItem = $( '.nav-item' );

    // Set Initial State of Menu 
    let showMenu = false;

    menuBtn.on( 'click', toggleMenu );

    function toggleMenu() {
        if( !showMenu ) {
            menuBtn.addClass( 'close' )
            menu.addClass( 'show' );
            menuNav.addClass( 'show' );
            navItem.addClass( 'show' );
            
            showMenu = true;
        } else {
            menuBtn.removeClass( 'close' )
            menu.removeClass( 'show' );
            menuNav.removeClass( 'show' );
            navItem.removeClass( 'show' );
            
            showMenu = false;
        }
    }
    
    function toggleNavbarMethod() {  
        if ($(window).width() > 650) {  
            menu.on('mouseover', function(){  
                menuNav.slideDown( 'medium' ); 
                menuNav.css( 'display', 'flex' );  
            }).on('mouseleave', function(){  
                menuNav.slideUp( 'medium');  
            });  
        }  
        else {  
            menu.off('mouseover').off('mouseout');  
        }  
    }  
    toggleNavbarMethod();  
    $(window).resize(toggleNavbarMethod);  
}); 