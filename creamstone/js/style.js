var indexvalue=1;
showImg(indexvalue);
function side_slide(e){
    showImg(indexvalue+=e)
}
function showImg(e){
    var i;
    var img=document.getElementsByClassName("banner");
    if(e > img.length){indexvalue=1}
    if(e<1){indexvalue=img.length}
    for(i=0;i<img.length;i++){
        img[i].style.display="none";
    }
    img[indexvalue-1].style.display="block";
}