function loadUsers() {
    return users;
}

function getRowElement(user) {
    let email = user.name.split(" ").join('.') + "@example.com";
    return `<li class="contact-item cf">
                <div class="contact-details">
                    <img class="avatar" src="${user.image}" />
                    <h3>${user.name}</h3>
                    <span class="email">${email}</span>
                </div>
                <div>
                    <span class="data">Joined ${user.joined}</span>
                </div>
            </li>`;
}

let currentPage = 0;
const itemsPerPage = 10;

function setupPager(root, pageSize) {
    console.log(root);
    for (let i = 1; i <= pageSize; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = i;
        a.onclick = function () {
            onPage(i - 1);
        };
        li.appendChild(a);
        root.appendChild(li);
    }
}

function onPage(page) {
    console.log(page);
    currentPage = page;
    loadCurrentPage();
}

function loadCurrentPage() {
    let ul = document.querySelector('.contact-list');
    ul.innerHTML = "";

    for (let i = itemsPerPage * currentPage; i < itemsPerPage * currentPage + itemsPerPage; i++) {
        if (i >= users.length) {
            break;
        }
        let row = getRowElement(users[i]);
        ul.innerHTML += row;
        ul.innerHTML += "\n";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let users = loadUsers();
    setupPager(document.querySelector('#pager'), Math.ceil(users.length / itemsPerPage));
    console.log(users);

    loadCurrentPage();
});
