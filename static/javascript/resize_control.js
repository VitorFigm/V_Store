window.onresize = ()=>{
    if(this.innerWidth>=800){
        show_hide_anim({search:'moving_in2',search_translucid_screen:'fade_out'})
    }else{
        show_hide_anim({search:'moving_in',search_translucid_screen:'fade_in98'})
    }
}