let navItems = document.querySelectorAll(".nav-item");

document.body.style.setProperty('--total-nav-items',navItems.length);

navItems.forEach((item,index)=>{
item.addEventListener("click",()=>{
    document.body.style.setProperty('--active-index',index)
    toggleActiveClass()
    
    function toggleActiveClass(){
        navItems.forEach(item1=>{
            item1.classList.remove("active");
        })
        item.classList.add("active")
    }
})
})