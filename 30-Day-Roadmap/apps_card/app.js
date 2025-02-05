const apps = [
    {
        id: 1,
        name: "iCodethis",
        included: true,
        img: `https://icodethis.com/logos/small-dark.svg`
    },
    {
        id: 2,
        name: "Slack",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/slack.png`
    },
    {
        id: 3,
        name: "Trelio",
        included: true,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/trelio.png`
    },
    {
        id: 4,
        name: "Jira",
        included: true,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/jira.png`
    },
    {
        id: 5,
        name: "Dropbox",
        included: true,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/dropbox.png`
    },
    {
        name: "Guest",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/guest.png`
    },
    {
        id: 6,
        name: "Kayak",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/kayak.png`
    },
    {
        id: 7,
        name: "Testlodge",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/testlodge.png`
    },
    {
        id: 8,
        name: "TikTok",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/tiktok.png`
    },
    {
        id: 9,
        name: "Maps",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/google-maps.png`

    },
    {
        id: 10,
        name: "Nextdoor",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/nextdoor.png`
    },
    {
        id: 11,
        name: "Duolingo",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/duolingo.png`
    },
    {
        id: 12,
        name: "La Tour",
        included: true,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/latour.png`
    },
    {
        id: 14,
        name: "Deliveroo",
        included: true,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/deliveroo.png`
    },
    {
        id: 15,
        name: "Vine",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/vine.png`
    },
    {
        id: 16,
        name: "Shazam",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/shazam.png`
    },
    {
        name: "Airbnb",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/airbnb.png`
    },
    {
        id: 17,
        name: "Twitch",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/twitch.png`
    },
    {
        id: 18,
        name: "Pando",
        included: false,
        img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/pando-health.png`
    }
];

const appsList = document.querySelector('#apps-list');
const btnAdd = document.querySelector('#btn-add');

let visibleAppsCount = 6; // Initially show 6 apps.

function renderApps() {
    appsList.innerHTML = ''; // Clear the current list

    // Loop through the apps and render only the ones that are included.
    apps.slice(0, visibleAppsCount).forEach((item) => {
        let app = document.createElement('div');
        app.classList.add('app');
        app.innerHTML = `<img src="${item.img}" alt="${item.name}" />
        <p>${item.name}</p>
        <button>+ADD</button>`;
        appsList.appendChild(app);
    });
}

btnAdd.addEventListener('click', () => {
    // Increment the number of visible apps by 6 when the button is clicked.
    visibleAppsCount += 6;
    renderApps();
});

// Initial render
renderApps();
