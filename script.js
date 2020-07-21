console.log(window.innerWidth)
let subjectList = ['Mathematics', 'Englsish Language', 'Physics', 'Chemistry', 'Biology', 'Literature', 'History', 'ICT',
    'Physical and Health Education', 'Further Mathematics', 'Economics', 'Food and Nutrition', 'Accounting', 'Business Studies', 'Agriculture',
    'Art and Design', 'French', 'Geography', 'Photography', 'Music', 'Business Management', 'Civic Education', 'Social Studies', 'Government',
    'Marketing', 'Christain Religious Studies', 'Islamic Religious Studies', 'Graphic Design', 'Yoruba', 'Hausa', 'Igbo',
];
const sortedSubjectList = subjectList.sort();

const searchSubject = document.querySelector('.search-subject');
const searchTeachers = document.querySelector('.search-teachers');
const subjectSearchbar = document.querySelector('.search-subject-bar-input')
const teacherSearchbar = document.querySelector('.search-teacher-bar-input')
const locationBar = document.querySelector('.search-location-bar-input')


const onSearchTeachers = () => {
    searchSubject.classList.remove('search-subject')
    searchSubject.classList.add('search-teachers')
    searchTeachers.classList.remove('search-teachers')
    searchTeachers.classList.add('search-subject')
    subjectSearchbar.style.display = 'none';
    teacherSearchbar.style.display = 'block';
}
const onSearchSubject = () => {
    searchSubject.classList.remove('search-teachers')
    searchSubject.classList.add('search-subject')
    searchTeachers.classList.remove('search-subject')
    searchTeachers.classList.add('search-teachers')
    subjectSearchbar.style.display = 'block';
    teacherSearchbar.style.display = 'none';
}

searchTeachers.addEventListener('click', onSearchTeachers)
searchSubject.addEventListener('click', onSearchSubject)

const searchSubjectOptions = () => {
    for (let i = 0; i < subjectList.length; i++) {
        let searchOptions = document.createElement('div');
        searchOptions.classList.add('search-subject-results');
        subjectSearchbar.appendChild[searchOptions];
        console.log(searchOptions)
        searchOptions.innerHTML = sortedSubjectList[i]
        document.body.appendChild(searchOptions);

    }
}

searchSubjectOptions();