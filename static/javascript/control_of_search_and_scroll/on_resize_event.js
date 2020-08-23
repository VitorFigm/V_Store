window.first_resolution = window.innerWidth //to control of resize
window.onresize = () => {
    console.log('first_resolution:'+this.first_resolution)
    console.log('innerWidth:'+this.innerWidth)
    ///elements
    const search = document.getElementById('search')
    const mobile_search = document.getElementById('mobile_search')

    ///change mobile to desktop
    if(this.innerWidth>500 && this.first_resolution<500){
        ///reset screen
        search.style.display = 'flex'
        search.style.visible = true
        mobile_search.style.display = 'none'
        mobile_search.style.visible = false

    }
    ///change desktop to mobile
    if(this.innerWidth<500 && this.first_resolution>500){
       ///reset screen
       search.style.display = 'none'
       search.style.visible = false
       mobile_search.style.display = 'flex'
       mobile_search.style.visible = true
    }
    this.first_resolution = this.innerWidth
    
}