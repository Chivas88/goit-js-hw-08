import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form'); 
initform();
    
form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    formData.forEach((key, value) => console.log(`${key} - ${value}`))
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}
);
form.addEventListener('input', throttle(event => {
    let parsedFilters = localStorage.getItem('feedback-form-state');
    
    parsedFilters = parsedFilters ? JSON.parse(parsedFilters) : {};
    parsedFilters[event.target.name] = event.target.value;

    if (parsedFilters) {
        localStorage.setItem('feedback-form-state', JSON.stringify(parsedFilters));
    };
},500));
function initform() {
    let parsedFilters = localStorage.getItem('feedback-form-state');
    parsedFilters = parsedFilters ? JSON.parse(parsedFilters) : {};
    
    if (parsedFilters) {
        Object.entries(parsedFilters).forEach(( [ name, value ]) => form.elements[name].value = value);
    }
    
}