import './index.css';
import {getUsers} from './api/userApi';

debugger; // eslint-disable-line no-debugger
console.log('Hello World!'); // eslint-disable-line no-console

getUsers().then(result => {
    let userBody = '';
    result.forEach(user => {
        userBody += `<tr>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.email}</td>
        </tr>`
    });

    global.document.getElementById('users').innerHTML = userBody;
});
