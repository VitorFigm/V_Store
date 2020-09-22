
//definitions
window.scroll_position_before = this.scrollY

//scroll function
window.onscroll = (e) => {  
    const scroll = get_el('scroll')
    //check if the scroll is at the end of the page, if it's, scroll image disappears
    scroll.style.opacity = this.scrollY !=0? '0':'1'
      
    ///functions
    const initial = window.innerWidth >=700?
        _=>{initial_state('search');initial_state('header')}
        : _=>initial_state('header')

    const final = window.innerWidth >=700?
        _=>{final_state('search');final_state('header')}
        : _=>final_state('header')
    
    ///detect scroll movement
    const scroll_up_or_0 = this.scrollY==0 
        || this.scrollY<=window.scroll_position_before

    scroll_up_or_0? initial():final()
    
    //save position
    window.scroll_position_before = this.scrollY

}
