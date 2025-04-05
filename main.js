const courseName=document.querySelector('#courseName');
const courseCategory=document.querySelector('#courseCategory');
const coursePrice=document.querySelector('#coursePrice');
const courseDescription=document.querySelector('#courseDescription');
const courseCapacity=document.querySelector('#courseCapacity');
const addBtn=document.querySelector('#click');
let courses=[];

if(localStorage.getItem("courses") != null){
    courses=JSON.parse(localStorage.getItem("courses"));
    displayCources();
}

addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const course={
        courseName:courseName.value,
        courseCategory:courseCategory.value, 
        coursePrice:coursePrice.value, 
        courseDescription:courseDescription.value, 
        courseCapacity:courseCapacity.value,  
    }
    courses.push(course);
    localStorage.setItem("courses",JSON.stringify(courses));
    Swal.fire({
        title: "course added!",
        text: "New course added successfully",
        icon: "success"
      });
    displayCources();
})

function displayCources(){
    const result=courses.map((course,index)=>{
        return `
        <tr>
        <td>${index+1}</td>
        <td>${course.courseName}</td>
        <td>${course.courseCategory}</td>
        <td>${course.coursePrice}</td>
        <td>${course.courseDescription}</td>
        <td>${course.courseCapacity}</td>
        </tr>
        `;
    }).join(' ');
    console.log(result);
    document.querySelector('#data').innerHTML=result;
}

