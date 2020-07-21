console.log(window.innerWidth)
let subjectList = ['Mathematics', 'Englsish Language', 'Physics', 'Chemistry', 'Biology', 'Literature', 'History', 'ICT',
    'Physical and Health Education', 'Further Mathematics', 'Economics', 'Food and Nutrition', 'Accounting', 'Business Studies', 'Agriculture',
    'Art and Design', 'French', 'Geography', 'Photography', 'Music', 'Business Management', 'Civic Education', 'Social Studies', 'Government',
    'Marketing', 'Christain Religious Studies', 'Islamic Religious Studies', 'Graphic Design', 'Yoruba', 'Hausa', 'Igbo',
];
const sortedSubjectList = subjectList.sort();
let locationList = ['Abia', 'Abuja', 'Adamawa', 'Akwa-Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Eboyi',
    'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nassarawa', 'Niger',
    'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', ' Taraba', 'Yobe', 'Zamfara'
];

const searchSubject = document.querySelector('.search-subject');
const searchTeachers = document.querySelector('.search-teachers');
const subjectSearchbar = document.querySelector('.search-subject-bar-input')
const teacherSearchbar = document.querySelector('.search-teacher-bar-input')
const locationBar = document.querySelector('.search-location-bar-input')
const optionsContainer = document.querySelector('.search-subject-results');
console.log(optionsContainer)


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
        let searchOptions = document.createElement('option');
        searchOptions.text = searchOptions.value = sortedSubjectList[i];
        // searchOptions.setAttribute('href', '#')
        optionsContainer.add(searchOptions, 0);
        searchOptions.classList.add('search-subject-results');
        console.log(searchOptions)
        searchOptions.innerHTML = sortedSubjectList[i]
        subjectSearchbar.appendChild(searchOptions);

    }
}

searchSubjectOptions();

const searchLocationsOptions = () => {
    for (let i = 0; i < locationList.length; i++) {
        let locationOptions = document.createElement('option');
        locationOptions.text = locationOptions.value = locationList[i];
        // searchOptions.setAttribute('href', '#')
        locationBar.add(locationOptions, 0);
        locationOptions.classList.add('search-subject-results');
        console.log(locationOptions)
        locationOptions.innerHTML = locationList[i]
        locationBar.appendChild(locationOptions);

    }
}
searchLocationsOptions();