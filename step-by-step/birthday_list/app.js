// Array of objects representing data to be displayed
const itemsData = [
    { image: 'https://i.pravatar.cc/300?img=1', name: 'John Doe', age: 25 },
    { image: 'https://i.pravatar.cc/300?img=5', name: 'Jane Smith', age: 30 },
    { image: 'https://i.pravatar.cc/300?img=3', name: 'Sam Green', age: 22 },
    { image: 'https://i.pravatar.cc/300?img=6', name: 'Chris Blue', age: 27 },
    { image: 'https://i.pravatar.cc/300?img=9', name: 'Alex White', age: 35 }
];

const container = document.querySelector('main'); // To append profiles to the main element

// Function to create and append DOM elements one by one with animation
function renderItems() {
    let index = 0;

    // Create each item one by one with a delay between them
    const interval = setInterval(() => {
        // Create profile div
        const profile = document.createElement('div');
        profile.classList.add('profile');

        // Create the profile image element (img tag)
        const profileImg = document.createElement('img');
        profileImg.classList.add('profile-img');
        profileImg.src = itemsData[index].image;
        profileImg.alt = `${itemsData[index].name}'s photo`;

        // Create profile name and age div
        const profileNameAge = document.createElement('div');
        profileNameAge.classList.add('profile-name__age');

        const name = document.createElement('h3');
        name.textContent = itemsData[index].name;

        const age = document.createElement('p');
        age.textContent = `Age: ${itemsData[index].age}`;

        // Append name and age to the profileNameAge div
        profileNameAge.appendChild(name);
        profileNameAge.appendChild(age);

        // Append profile image and name-age div to the profile div
        profile.appendChild(profileImg);
        profile.appendChild(profileNameAge);

        // Append the profile to the container
        container.appendChild(profile);

        index++;
        if (index >= itemsData.length) {
            clearInterval(interval);
        }
    }, 800);
}

renderItems();
