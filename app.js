import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

const staff_add_form = document.querySelector('#staff_add_form')
const msg = document.querySelector('.msg')
const table_data_list = document.querySelector('#table_data')

staff_add_form.addEventListener('submit', function(e){
    e.preventDefault()


let form_data = new FormData(e.target);
let data = Object.fromEntries(form_data.entries())

let {name,profile, email, mobile, linkedin, github, facebook, twitter, bio } = data;

if(name == '' || email == '' || mobile == '' || linkedin == '' || github == '' || facebook == '' || twitter == '' || bio == '' ){
    msg.innerHTML = Alert.danger('All Field Are required!')
   

}else{
    Storage.set("member", data);
    staff_add_form.reset();
    showAllMember()
}

    
})

showAllMember()
function showAllMember(){
    let getMem = Storage.get("member");

   
    let mem = '';

    getMem.map((data, index) => {

        let {name, profile, email, mobile, linkedin, github, facebook, twitter, bio  } = data;
        mem += `
        <tr>
                <td>${index + 1}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${mobile}</td>
                <td><img src="${profile ? profile : './img/avatar.png'}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 5px;" alt=""></td>
                <td>
                  <a href = "${linkedin}"><i class="fas fa-eye btn btn-primary"></i></a>
                  <a href = "${facebook}"><i class="fas far fa-edit btn btn-warning"></i></a>
                  <a href = "${twitter}"><i class="fas fa-trash btn btn-danger"></i></a>
                </td>
              </tr>
        `

    })
    table_data_list.innerHTML = mem;
}