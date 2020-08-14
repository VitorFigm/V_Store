
//definitions



window.scroll_position_before = this.scrollY

//scroll function
window.onscroll = function(e){  
    //vars
    const scroll = document.getElementById('scroll')
    //check if the scroll is at the end of the page, if it's, scroll image disappears
    if( this.scrollY>(document.body.offsetHeight-this.innerHeight-2) ){
        scroll.style.opacity = '0'
    }else scroll.style.opacity = '1'


    if(window.innerWidth>=500){item_to_desappier='search';anim_time="1s"}   //changes the item that receive the animation acordding to screen resolution
    else {item_to_desappier='mobile_search';anim_time="1s"}

    //check if user scroll up or scroll down

    if(this.scrollY>=window.scroll_position_before){   ///scroll down
        document.getElementById(item_to_desappier).visible = false
        el_visibility_animation_control(item_to_desappier, visible_start=false, transluc_scr_control=false,time=anim_time)
    }else{  //scroll up
        document.getElementById(item_to_desappier).visible = true
        el_visibility_animation_control(item_to_desappier, visible_start=false, transluc_scr_control=false,time=anim_time)
    }

    //save position
    window.scroll_position_before = this.scrollY

}


window.onresize = function(){
    //!window.matchMedia( "(hover: none)" ).matches
    
    //reset screen
    
    const ev = setInterval(function(){   //function to wait user stop writing in mobile
        const search = document.getElementById('search')
        if (!search.mobile_resize_control) {   //is false if mobile user are not writing
            search.style.display = 'none'
            document.getElementById('mobile_search').style.display = 'none'
            clearInterval(ev)
            //console.log('not tip')
         }

    },500)
}



 function el_visibility_animation_control(name_of_el,visible_start=true, transluc_scr_control=true, time="1s",mobile_search=false,no_wait=false){ //control if the element will appear or not
    //elements
    const trans = document.getElementById('transluc_scr')
    const trans_mobile = document.getElementById('transluc_scr_for_mobile_search') 
    const menu = document.getElementById(name_of_el)
    const mobile_search_el = document.getElementById('mobile_search')
    //properties
    if(menu.visible==undefined)menu.visible=visible_start  ///set the visible property in element if not defined
    if(menu.wait_anim_end==undefined)menu.wait_anim_end=false   //prevent animation conflict
    
    if(menu.visible){
        if(!menu.wait_anim_end){ //only play animation if there's no animation playing
            menu.wait_anim_end=true  //block play of another animation
    
            menu.style.display = 'flex'   
            menu.style.animation = 'appears_moving '+time+' forwards'
            setTimeout(function(){menu.wait_anim_end=false},time[0]*1000)
    
            if(transluc_scr_control){
                trans.style.display = 'flex'
            }
            if(mobile_search){ 
                trans_mobile.style.display = 'flex'
                //close mobile search bar
                mobile_search_el.style.animation =""
                setTimeout(function(){
                    mobile_search_el.style.animation = 'mobile_search_desappears 1s forwards'
                },200) 
            }
    
            
        }
    }else{
        if(!menu.wait_anim_end||no_wait){ //only play animation if there's no animation playing or if we disable animation block with no_wait

            menu.wait_anim_end=true  //block play of another animation
            menu.style.animation = 'disappears_moving '+time+' forwards'
            setTimeout(function(){menu.wait_anim_end=false},time[0]*1000)

            if(transluc_scr_control){   
                trans.style.display = 'none'
            }

            if(mobile_search){   
                trans_mobile.style.display = 'none'
                

            }

            
        }

    }
        

 }


 function onclick_event_animation_control(name_of_el,visible_start=true, transluc_scr_control=true, time="1s",mobile_search=false,no_wait=false){  //to put in the elements that calls the visibility animation
    const el = document.getElementById(name_of_el)
    el.visible = !el.visible
    el_visibility_animation_control(name_of_el,visible_start, transluc_scr_control, time, mobile_search,no_wait)
}
