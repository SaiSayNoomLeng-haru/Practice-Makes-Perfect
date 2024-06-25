const date = document.getElementById('list-date');
const time = document.getElementById('list-time');
const addBtn = document.getElementById('list-btn');

const months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'August',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

addBtn.addEventListener('click', () => {
    const listValue = document.getElementById('list').value;
   
    const getCalendar = new Date(date.value);
    const localDate = new Date(getCalendar.getTime() + getCalendar.getTimezoneOffset() * 60000);
    let getMonth = localDate.getMonth();
    let monthName = months[getMonth];
    let getWeekday = localDate.getDay();
    let weekDay = weekdays[getWeekday];
    let getDate = localDate.getDate();

  
    const getTime = time.value;
    let [hour, minute] = getTime.split(':');
    let period = 'AM';

    if(hour > 12){
        period = 'PM'
        hour -= 12;
    }

    const div = document.createElement('div');
    div.classList.add('tasks');
    const label = document.createElement('label');
    const labelText = document.createTextNode(` ${listValue}`);
    label.setAttribute('for', 'task-added');
    label.classList.add('label-task');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'task-added');


    const p = document.createElement('p');
    const span = document.createElement('span');
    const spanText = document.createTextNode('Deadline');
    span.setAttribute('style', 'color : red');
    span.appendChild(spanText);
    p.appendChild(span);
    const pNode = document.createTextNode(` : ${monthName} ${weekDay} ${getDate} ${hour}:${minute} ${period}`);

    const delBtn = document.createElement('button');
    delBtn.classList.add('deleteBtn');
    delBtn.id = 'delBtn';
    delBtn.setAttribute('type', 'button');
    const i = document.createElement(`i`);
    i.classList.add('fa-solid', 'fa-trash');
    i.setAttribute('style', 'color: red');
    const currentTask = document.getElementById('current-task');

    currentTask.appendChild(div);
    div.appendChild(label);
    label.appendChild(input);
    label.appendChild(labelText);
    div.appendChild(p);
    p.appendChild(pNode);
    div.appendChild(delBtn);
    delBtn.appendChild(i);
    
    delBtn.addEventListener('click', () => {
        div.remove();
    })

    //checked
    input.id = 'checked-completed';
    const checked = document.getElementById('checked-completed');
    checked.addEventListener('change', ()=>{
        if ( checked.checked){
            const ul = document.getElementById('completed-task-list-menu');
            const li = document.createElement('li');
            li.classList.add('completed-task-list');
            li.setAttribute('style', 'text-decoration: line-through');
            const i = document.createElement('i');
            i.classList.add('fa-solid');
            i.classList.add('fa-recycle');
            i.classList.add('recycle-btn')
            i.id = 'recycle-btn';
            i.setAttribute('style', 'color: #ffffff');
            const liText = document.createTextNode(`${listValue}  `);
            

            ul.appendChild(li);
            li.appendChild(liText);
            li.appendChild(i);
            div.remove();

            const recycleBtn = document.getElementById('recycle-btn');
            recycleBtn.addEventListener('click', () => {
                currentTask.appendChild(div);
                div.appendChild(label);
                label.appendChild(input);
                label.appendChild(labelText);
                div.appendChild(p);
                p.appendChild(pNode);
                div.appendChild(delBtn);
                ul.removeChild(li);

                checked.checked = false;
                
            })

        }
    })
});

//select color
const selectColor = document.getElementById('colors');
selectColor.addEventListener('change', () => {
   const options = selectColor.selectedOptions;
   for ( let i = 0; i < options.length; i++){
    let option = options[i];
    let body = document.body;

    if( option.value === 'brown'){
        body.style.backgroundColor = 'var(--color-brown)';
        body.style.color = 'white';
        body.style.textShadow = 'none';
       
    }else if( option.value === 'purple'){
        body.style.backgroundColor = 'var(--color-purple)';
        body.style.color = 'white';
        body.style.textShadow = 'none';
       
    }else if( option.value === 'night'){
        body.style.backgroundColor = 'var(--color-night)';
        body.style.color = 'var(--color-neon)';
        body.style.textShadow = 'var(--text-shadow)';
        
    }else{
        body.style.backgroundColor = 'var(--color-default)';
        body.style.color = 'white';
        body.style.textShadow = 'none';
       
    }
   }
});

//select font
const selectFont = document.getElementById('fonts');
selectFont.addEventListener('change', () => {
    const options = selectFont.selectedOptions;
    for(let i = 0; i < options.length; i++){
        let option = options[i];
        console.log(option);
        const list = document.getElementById('list');
        const listDate = document.getElementById('list-date');
        const listTime = document.getElementById('list-time');
        const listBtn = document.getElementById('list-btn');
        const currentTask = document.getElementById('current-task');
        const completedTask = document.getElementById('completed-task');
        const setting = document.getElementById('setting');
        if(option.value === 'es'){
            list.style.fontFamily = 'var(--font1)';
            listDate.style.fontFamily = 'var(--font1)';
            listTime.style.fontFamily = 'var(--font1)';
            listBtn.style.fontFamily = 'var(--font1)';
            currentTask.style.fontFamily = 'var(--font1)';
            completedTask.style.fontFamily = 'var(--font1)';
            setting.style.fontFamily = 'var(--font1)';
        }else if (option.value === 'mx'){ 
            list.style.fontFamily = 'var(--font2)';
            listDate.style.fontFamily = 'var(--font2)';
            listTime.style.fontFamily = 'var(--font2)';
            listBtn.style.fontFamily = 'var(--font2)';
            currentTask.style.fontFamily = 'var(--font2)';
            completedTask.style.fontFamily = 'var(--font2)';
            setting.style.fontFamily = 'var(--font2)';
        }else{
            list.style.fontFamily = 'Segoe-UI';
            listDate.style.fontFamily = 'Segoe UI';
            listTime.style.fontFamily = 'Segoe UI';
            listBtn.style.fontFamily = 'Segoe UI';
            currentTask.style.fontFamily = 'Segoe UI';
            completedTask.style.fontFamily = 'Segoe UI';
            setting.style.fontFamily = 'Segoe UI';
        }
    }
    
})







