const friendsRequestArray = [
    {
        img: 'https://i.pravatar.cc/300',
        name: 'Jerome Williams',
        mutual: '7',
    },
    {
        img: 'https://i.pravatar.cc/299',
        name: 'Sally Steele',
        mutual: '3',
    },
    {
        img: 'https://i.pravatar.cc/298',
        name: 'Rachel Ball',
        mutual: '8',
    },
];

const friendsContainer = document.querySelector('main');

friendsRequestArray.forEach(({ img, name, mutual }) => {
    friendsContainer.insertAdjacentHTML("beforeend", `
        <div class="friend-card">
            <img class="friend-img" src="${img}" alt="pravatar"/>
            <h3 class="name">${name}</h3>
            <p class="mutual">You have ${mutual} connections</p>
            <button class="btn confirm-btn">Confirm</button>
        </div>`)
})