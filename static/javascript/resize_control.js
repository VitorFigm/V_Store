window.higher_res = window.innerWidth > 700

window.onresize = ()=>{

    const changed_res = this.innerWidth > 700 != window.higher_res 
    
    if(changed_res){
        initial_state('search');
        initial_state('header');
        initial_state('search_translucid_screen')
    }
    ///save screeen state
    window.higher_res = window.innerWidth > 700
}