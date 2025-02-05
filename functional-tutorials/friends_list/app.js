const friendsList = [
    {
        name: "Jason Graham",
        imageUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
        altText: "Jason Graham profile picture",
        isFollowing: false
    },
    {
        name: "Ophelia Gaddy",
        imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
        altText: "Ophelia Gaddy profile picture",
        isFollowing: true
    },
    {
        name: "Lillian Whitmire",
        imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
        altText: "Lillian Whitmire profile picture",
        isFollowing: false
    },
    {
        name: "Joseph Shepherd",
        imageUrl: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
        altText: "Joseph Shepherd profile picture",
        isFollowing: false
    },
    {
        name: "Alex R. Prowell",
        imageUrl: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        altText: "Alex R. Prowell profile picture",
        isFollowing: false
    }
];

function renderFriendsList() {
    // const mainEl = document.querySelector('main');
    const template = document.getElementById('tpl-friend-item');
    const ulEl = document.querySelector('ul');
    friendsList.forEach(friend => {
        // Clone the template's content
        const friendItem = template.content.cloneNode(true);
        // Find the elements inside the cloned template
        const imgElement = friendItem.querySelector('img');
        const nameElement = friendItem.querySelector('.friend-name');
        const followButton = friendItem.querySelector('.follow-btn');
        // Set the image and name
        imgElement.src = friend.imageUrl;
        imgElement.alt = friend.altText;
        nameElement.textContent = friend.name;
        // Set the follow button text and class
        followButton.textContent = friend.isFollowing ? 'Following' : 'Follow';
        if (friend.isFollowing) {
            followButton.classList.add('followed');
        }
        // Append the cloned item to the ul
        ulEl.appendChild(friendItem);

    })
}

// Call the renderFriends function to display the list
renderFriendsList();