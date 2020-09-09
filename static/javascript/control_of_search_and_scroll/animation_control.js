function el_visibility_animation_control(name_of_el, args){ //control if the element will appear or not
    //args
    let default_args = {visible_start:true, transluc_scr_control:true, time:"1s",mobile_search:false,no_wait:true} 
    args = {...default_args, ...args}
    //elements
    const trans = document.getElementById('transluc_scr')
    const trans_mobile = document.getElementById('transluc_scr_for_search') 
    const menu = document.getElementById(name_of_el)
    const mobile_search_el = document.getElementById('mobile_search')
    //properties
    if(menu.visible==undefined)menu.visible=args.visible_start
    if(menu.wait_anim_end==undefined)menu.wait_anim_end=false   //prevent animation conflict
    
    if(menu.visible){
        if(!menu.wait_anim_end||args.no_wait){ //only play animation if there's no animation playing or if we disable animation block with no_wait
            menu.wait_anim_end=true  //block play of another animation
    
            menu.style.display = 'flex'   
            menu.style.animation = 'appears_moving '+args.time+' forwards'
            setTimeout(()=>{menu.wait_anim_end=false},args.time[0]*1000)
    
            if(args.transluc_scr_control){
                trans.style.display = 'flex'
            }
            if(args.mobile_search){ 
                trans_mobile.style.display = 'flex'
                //close mobile search bar
                mobile_search_el.style.animation =""
                setTimeout(()=>{
                    mobile_search_el.style.animation = 'mobile_search_desappears 1s forwards'
                },200) 
            }
    
            
        }
    }else{
        if(!menu.wait_anim_end||args.no_wait){ //only play animation if there's no animation playing or if we disable animation block with no_wait
            
            menu.wait_anim_end=true  //block play of another animation
            menu.style.animation = 'disappears_moving '+args.time+' forwards'
            setTimeout(()=>{menu.wait_anim_end=false},args.time[0]*1000)

            if(args.transluc_scr_control){   
                trans.style.display = 'none'
            }

            if(args.mobile_search){   
                trans_mobile.style.display = 'none'
            }

            
        }

    }
        

 }


 function onclick_event_animation_control(name_of_el, args={} ){  //to put in the elements that calls the visibility animation
    const el = document.getElementById(name_of_el)
    if(el.visible !=undefined)el.visible = !el.visible
    el_visibility_animation_control(name_of_el, args)
}
