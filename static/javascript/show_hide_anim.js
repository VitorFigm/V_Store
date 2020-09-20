
function show_hide_anim(requests){
    for(let el_id in requests){
        let el = get_el(el_id)
        let anim = requests[el_id]
        let time = '1s' ///default
        if(typeof(anim)!='string'){
            let array = anim
            anim = array[0]
            time = array[1]            
        }
        el.style.animation = anim+" "+time+" forwards";
    }
    
}