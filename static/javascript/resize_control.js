window.higher_res = window.innerWidth > 700

window.onresize = ()=>{
    if(this.innerWidth>700 && !window.higher_res  ){
        show_hide_anim({search:'moving_in2',header:'moving_in2',search_translucid_screen:'fade_out98'})
    }
    if(this.innerWidth<700 && window.higher_res){
        show_hide_anim({search:'moving_out2',header:'moving_in2',search_translucid_screen:'fade_out98'})
    }

    window.higher_res = window.innerWidth > 700
}