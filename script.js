const courseCode = document.getElementsByClassName("card-subtitle");
const courseName = document.getElementsByClassName("card_title");
const courses = document.getElementsByClassName("card");
function search() {
    let input = document.getElementById("searchQuery").value;
    if(input==''){
        for(let i=0;i<courseCode.length;i++){
            courses[i].style.display="flex";
        }
    }
    else{
        input=input.toLowerCase();
        console.log(input);
        for(let i=0;i<courseCode.length; i++){
            if(courseCode[i].innerHTML.toLowerCase().includes(input) || courseName[i].innerText.toLowerCase().includes(input)){
                courses[i].style.display="flex";
            }
            else {
                courses[i].style.display="none";
            }
        }
    }
}
        