const input_box = document.getElementById('input_box')
const list_container = document.querySelector('.list_container')

function addTask() {
    if (input_box.value === '') {
        alert('you must wrtie something else')
    } else {
        const li = document.createElement('li')
        li.innerHTML = input_box.value;
        list_container.appendChild(li)
        const span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    input_box.value = ''
}

list_container.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
        }
    }

)