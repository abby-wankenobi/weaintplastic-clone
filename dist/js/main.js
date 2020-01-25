// Select DOM Items

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