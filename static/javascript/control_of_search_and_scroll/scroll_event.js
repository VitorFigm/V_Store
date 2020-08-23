
//definitions



window.scroll_position_before = this.scrollY

//scroll function
window.onscroll = (e) => {  
    //vars
    const scroll = document.getElementById('scroll')
    const search = document.getElementById('search')
    //check if the scroll is at the end of the page, if it's, scroll image disappears
    if( this.scrollY>(document.body.offsetHeight-this.innerHeight-2) ){
        scroll.style.opacity = '0'
    }else scroll.style.opacity = '1'

    let item_to_desappier;
    if(window.innerWidth>=500){item_to_desappier='search';anim_time="1s"}   //changes the item that receive the animation acordding to screen resolution
    else {item_to_desappier='mobile_search';anim_time="1s"}
    ////creating object
    let my_object = document.getElementById(item_to_desappier)
    //check if the scroll is at the start of the page, if it's, search will be visible
    if(this.scrollY==0){
        my_object.visible = true
        el_visibility_animation_control(item_to_desappier, visible_start=false, transluc_scr_control=false,time=anim_time,false,no_wait=true)
    }
    //check if user scroll up or scroll down
    //mobile_resize_control prevents change in search when focus event in input of search is happening
    else if(this.scrollY>=window.scroll_position_before&&!search.block_scroll_control){   ///scroll down
        my_object.visible = false
        el_visibility_animation_control(item_to_desappier, visible_start=false, transluc_scr_control=false,time=anim_time)
    }else if(!search.block_scroll_control){  //scroll up
        my_object.visible = true
        el_visibility_animation_control(item_to_desappier, visible_start=false, transluc_scr_control=false,time=anim_time)
    }

    //save position
    window.scroll_position_before = this.scrollY

}






