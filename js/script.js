
//Create Demo Json Data
const demoData = {
    firstname: 'Alexander',
    lastname: 'Svetorojdenniy',
    email: 'empty@xxx.com',
    phonenumber: 'empty',
    summary: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab exercitationem mollitia, minus qui veniam rerum quae, eius iste excepturi fugiat, debitis modi suscipit delectus doloribus.',
    location: 'empty',
    moreDate: {
        workexpirience: [
            {
                From: new Date('March 22, 2017'),
                To: new Date('June 15, 2018'),
            JobTitle: 'XXXXXXXX',
            Company: 'YYYYYYYYY',
        },
            {
                From: new Date('November 3, 2010'),
                To: new Date('April 15, 2022'),
            JobTitle: 'XXXXXXXX',
            Company: 'YYYYYYYYY',
        },
            {
                From: new Date('March 13, 2021'),
                To: new Date('April 15, 2022'),
            JobTitle: 'XXXXXXXX',
            Company: 'YYYYYYYYY',
        }
    ],
        courses: [{
            Title: 'Masa Tlalim Web Development',
            DateCompleted: new Date('February 12, 2023')
            
        },{
            Title: 'USSR Technical Colledj',
            DateCompleted: new Date('September 5, 1967')
        },{
            Title: 'Space psychology courses',
            DateCompleted: new Date('December 31, 3023')
        }],
        skills: [{
            Title: 'HTML',
            Experience: '1 year'

        },{
            Title: 'Css',
            Experience: '1 year'

        },{
            Title: 'JavaScript',
            Experience: '1 year'

        },{
            Title: 'TypeScript',
            Experience: '6 months'

        },{
            Title: 'React',
            Experience: '3 months'

        },{
            Title: 'Vue',
            Experience: '3 months'

        }],
        education: [{
            From: new Date('December 17, 1999'),
            To: new Date('October 25, 2005'),
            AcademicInstitution: 'Moscow University of Geodesy and Cartography (Miigaik)',
            FieldofStudy: 'Information systems and technologies',
            Type: 'Bachelor'
        }],
        languages: [{
            Language: 'languages1',
            Level: 'none'
        },{
            Language: 'languages2',
            Level: 'none'
        }],
    }
}
const jsonData = JSON.stringify(demoData)
const parseData = JSON.parse(jsonData, function(key, value) {
    if (key == 'From' || key == 'To' || key == 'DateCompleted') return new Date(value);
    return value;
  });
  
// Create elements of page
const button = document.querySelector('.buttonCreate')
const FullName = document.querySelector('.left__name')
const Adress = document.querySelector('.left__address-info')
const PhoneNumber = document.querySelector('.left__phone-info')
const Email = document.querySelector('.left__email-info')
const Languages = document.querySelector('.left__languages-list')
const Summary = document.querySelector('.right__information')
const WorkExpirience = document.querySelector('.work')
const Education = document.querySelector('.education')
const Courses = document.querySelector('.courses')
const Skills = document.querySelector('.skills')

//Functions

function CreateFullName(firstname, lastname){
    
    return (firstname[0].toUpperCase() + firstname.slice(1) + ' ' + lastname[0].toUpperCase() + lastname.slice(1) )
}
function LanguageList(arr){
    Languages.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        Languages.innerHTML += `<li> ${arr[i].Language} </br> Level: ${arr[i].Level}</li>`
    }

}
function WorkExpirienceList(arr) {
    WorkExpirience.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        let fromDate = arr[i].From.getDate() + '.' + arr[i].From.getMonth() + '.' + arr[i].From.getFullYear() 
        let toDate = arr[i].To.getDate() + '.' + arr[i].To.getMonth() + '.' + arr[i].To.getFullYear() 
        WorkExpirience.innerHTML += `<li>Job Title: ${arr[i].JobTitle} Company: ${arr[i].Company} <br> From: ${fromDate} To: ${toDate}</li>`       
    }

}
function EducationList(arr) {
    Education.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        let fromDate = arr[i].From.getDate() + '.' + arr[i].From.getMonth() + '.' + arr[i].From.getFullYear() 
        let toDate = arr[i].To.getDate() + '.' + arr[i].To.getMonth() + '.' + arr[i].To.getFullYear() 
        Education.innerHTML += `<li>Academic Institution: ${arr[i].AcademicInstitution} <br> Field of Study: ${arr[i].FieldofStudy} Type: ${arr[i].Type}<br> From: ${fromDate} To: ${toDate}</li>`       
    }

}
function CoursesList(arr) {
    Courses.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        let dateCompleted = arr[i].DateCompleted.getDate() + '.' + arr[i].DateCompleted.getMonth() + '.' + arr[i].DateCompleted.getFullYear() 
        Courses.innerHTML += `<li>Title: ${arr[i].Title} Date Completed: ${dateCompleted}</li>`       
    }

}
function SkillsList(arr) {
    Skills.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        Skills.innerHTML += `<li>Title: ${arr[i].Title} Experience: ${arr[i].Experience}</li>`       
    }

}

// Add Event Listener
button.addEventListener('click', ()=>{
    //add data to left block
    setTimeout(()=>{
        FullName.innerHTML = CreateFullName(parseData.firstname, parseData.lastname)
    },100)
    setTimeout(()=>{
        Adress.innerHTML = `${parseData.location}`

    },200)
    setTimeout(()=>{
        PhoneNumber.innerHTML = `${parseData.phonenumber}`

    },300)
    setTimeout(()=>{
        Email.innerHTML = `${parseData.email}`

    },400)
    setTimeout(()=>{
        LanguageList(parseData.moreDate.languages)

    },500)
    //add data to right block
    setTimeout(()=>{
        Summary.innerHTML = parseData.summary
    },600)
    setTimeout(()=>{
        WorkExpirienceList(parseData.moreDate.workexpirience)
    },700)
    setTimeout(()=>{
        EducationList(parseData.moreDate.education)
    },800)
    setTimeout(()=>{
        CoursesList(parseData.moreDate.courses)
    },900)
    setTimeout(()=>{
        SkillsList(parseData.moreDate.skills)
    },100)
})
