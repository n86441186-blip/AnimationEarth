// Rows
const shortsRow = document.getElementById('shortsRow');
const showsRow = document.getElementById('showsRow');
const forYouRow = document.getElementById('forYouRow');

// Add items
function addItems(row, label) {
    for (let i = 1; i <= 10; i++) {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = `${label} ${i}`;
        div.onclick = () => openModal(`${label} ${i}`);
        row.appendChild(div);
    }
}

addItems(shortsRow, 'Short');
addItems(showsRow, 'Show');
addItems(forYouRow, 'For You');

// Content modal
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalDesc = document.getElementById('modalDesc');
const modalActions = document.getElementById('modalActions');
const modalThumb = document.getElementById('modalThumb');

function openModal(name) {
    modalDesc.textContent = `Description for ${name}`;
    modalActions.style.display = 'none';
    modalDesc.style.display = 'block';
    modalBackdrop.style.display = 'flex';
}

modalClose.onclick = () => modalBackdrop.style.display = 'none';

modalDesc.onclick = () => {
    modalDesc.style.display = 'none';
    modalActions.style.display = 'block';
};

modalThumb.onclick = () => {
    modalActions.style.display = 'none';
    modalDesc.style.display = 'block';
};

// Search bar
document.getElementById("searchBar").addEventListener("input", function() {
    const q = this.value.toLowerCase();
    document.querySelectorAll(".item").forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(q) ? "flex" : "none";
    });
});

// Login modal
const loginBackdrop = document.getElementById('loginBackdrop');
const loginClose = document.getElementById('loginClose');
const loginTitle = document.getElementById('loginTitle');

document.getElementById('signInBtn').onclick = () => {
    loginTitle.textContent = "Sign In";
    loginBackdrop.style.display = 'flex';
};

document.getElementById('createAccountBtn').onclick = () => {
    loginTitle.textContent = "Create Account";
    loginBackdrop.style.display = 'flex';
};

loginClose.onclick = () => loginBackdrop.style.display = 'none';
