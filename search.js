searchInput = document.getElementById('searchInput')



searchInput.addEventListener('keyup',function(event){
    let searchQuery = event.target.value.toLowerCase();
    let allDOMCollection = document.getElementsByClassName('name')
   
    for(let i =0; i < allDOMCollection.length;i++){
        const currentName = allDOMCollection[i].textContent.toLowerCase();
        
        if (currentName.includes(searchQuery)) {
            allDOMCollection[i].style.display = "block";
        }else{
            allDOMCollection[i].style.display = "none";
        }
    }
})


