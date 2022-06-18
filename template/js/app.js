const Home = document.getElementById('BtnHome');
const Project = document.getElementById('BtnProject');
const Contact = document.getElementById('BtnContact');


EventListener();


function EventListener (){
    Home.addEventListener('click',HomeActive);
    Project.addEventListener('click',ProjectActive);
    Contact.addEventListener('click',ContactActive);
};


function HomeActive (){
    Home.className="is-active"
    Project.className=""
    Contact.className=""
}

function ProjectActive (){
    Home.className=""
    Project.className="is-active"
    Contact.className=""
}

function ContactActive (){
    Home.className=""
    Project.className=""
    Contact.className="is-active"
}
