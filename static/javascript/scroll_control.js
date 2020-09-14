
//definitions
window.scroll_position_before = this.scrollY

//scroll function
window.onscroll = (e) => {  
    const scroll = get_el('scroll')
    //check if the scroll is at the end of the page, if it's, scroll image disappears
    if( this.scrollY !=0 ){
        scroll.style.opacity = '0'
    }else scroll.style.opacity = '1'
    ////creating args objects
    let _in
    let _out
    if(window.innerWidth >=700){
        _in = {search:'moving_in2',header:'moving_in2'}
        _out = {search:'moving_out2',header:'moving_out2'}
    }else{
        _in = {header:'moving_in2'}
        _out = {header:'moving_out2'}
    }
    if(this.scrollY==0) show_hide_anim(_in)
    else if(this.scrollY>=window.scroll_position_before){   ///scroll down
        show_hide_anim(_out)
    }else{  //scroll up
        show_hide_anim(_in)
    }
    
    //save position
    window.scroll_position_before = this.scrollY

}



