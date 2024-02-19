function cc(){
  let dd=document.querySelector('.query');
  
  if(dd.value.length!==0){
  let url='https://www.youtube.com/results?search_query='+ dd.value;
  window.open(url,"_self")
}

}