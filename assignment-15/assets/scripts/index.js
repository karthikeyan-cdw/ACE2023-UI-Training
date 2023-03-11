// Stored Posters and Video Details
const posters = [
  {
    imageUrl:
      "https://ddz4ak4pa3d19.cloudfront.net/cache/56/62/5662bc2079ee7ffd491b65c29a360ac9.jpg",
    title: "Sprite Fright",
  },
  {
    imageUrl:
      "https://cdna.artstation.com/p/assets/covers/images/019/392/064/large/andy-goralczyk-agent-poster-street-small.jpg?1563288236",
    title: "Agent 327",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Spring2019AlphaPosterBlender.jpg/1200px-Spring2019AlphaPosterBlender.jpg",
    title: "Spring",
  },
];
const video = {
  videoUrl:
    "https://ia800200.us.archive.org/7/items/Sintel/sintel-2048-stereo.mp4",
  title: "Sintel",
  description:
    "“Sintel” is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film. This 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. ",
  comments: [
    {
      name: "Micheal Scott",
      image: "images/reviewers/micheal.png",
      comment:
        "How often do people make a film where the main character kills the thing they were trying to rescue because they didn’t recognize it? Not that often. This brought tears to my eyes.",
    },
    {
      name: "Dwight K Schrute (Asst. to the Regional Manager)",
      image: "images/reviewers/dwight.png",
      comment:
        "Breathtaking, I’ve only just begun my blender journey. Making something every day until I get to the point I can create something on this scale. Pretty amazing short story as well. Props all around to all involved in this great piece of work!",
    },
    {
      name: "Jim Halpert",
      image: "images/reviewers/jim.png",
      comment:
        "Only the best stories can make you cry, and while I’ve lost count how many times I’ve watched this remarkable piece of art  over the years showing it to people I know, Sintel brings a tear to my eye every time. This film is inspiring not only for the beautiful story but for the magical quality animation.",
    },
    {
      name: "Pam Beesly Halpert",
      image: "images/reviewers/pam.png",
      comment:
        "This short film was riveting. The musical overlay was astounding and so were the animations. I was bawling like a little kid at the end of this video and not many videos are able to do this to me.",
    },
    {
      name: "Angela Martin",
      image: "images/reviewers/angela.png",
      comment:
        "I saw this movie a long time ago as a child and it still scars me to this day. This is the kind of stuff that should AT THE VERY LEAST be played before a movie the way they showed bao before The Incredibles 2. These are little masterpieces.",
    },
    {
      name: "Kevin Malone",
      image: "images/reviewers/kevin.png",
      comment:
        "Wow, at first I thought that it wasn’t that good, nice animation and all but not excellent story. Then I saw the end. The feels are real. You win Blender Foundation, you win.",
    },
    {
      name: "Andy Bernard",
      image: "images/reviewers/andy.png",
      comment:
        "Honestly seeing a story with a sad ending is refreshing, I can tell you the ending of 99% of all movies ever made. “Its a happy ending”. Its why I like game of thrones and its why I loved this.",
    },
  ],
};
// Current user Details
const currentUser = {
  userName: "Micheal Scott",
  profilePhotoURL: "./assets/images/reviewers/micheal.png",
};
// Starting event listeners
function startEventListeners() {
  document.getElementById("play-icon").addEventListener("click", playMovie);
}
startEventListeners();
// Helper function to create a dom element
function createElement(
  tag = "div",
  classList = [],
  attributes = {},
  text = ""
) {
  let element = document.createElement(tag);
  for (let className of classList) {
    element.classList.add(className);
  }
  for (let attribute in attributes) {
    element.setAttribute(attribute, attributes[attribute]);
  }
  element.innerText = text;
  return element;
}
// Function to set the current user
function setCurrentUser(user) {
  // Wrapper for profile
  let profileFragment = document.createDocumentFragment();
  profileFragment.appendChild(
    createElement("p", ["user-name"], { id: "user-name" }, user.userName)
  );
  profileFragment.appendChild(
    createElement("div").appendChild(
      createElement("img", ["profile-icon"], {
        src: user.profilePhotoURL,
        alt: user.userName,
      })
    )
  );
  document.getElementById("profile-section").appendChild(profileFragment);
}
setCurrentUser(currentUser);

// Function to load the poster content and inject in the DOM
function loadPosters() {
  // Wrapper for posters
  let postersFragment = document.createDocumentFragment();
  for (let posterImage of posters) {
    postersFragment.appendChild(
      createElement("img", ["poster"], {
        src: posterImage.imageUrl,
        alt: posterImage.title,
      })
    );
  }
  document.getElementById("posters-container").appendChild(postersFragment);
}
loadPosters();

// Function to load the video details and inject into the DOM
function loadVideoDetails() {
  document.getElementById("video").appendChild(
    createElement("source", [], {
      src: `${video.videoUrl}#t=95`,
      type: "video/mp4",
    })
  );
  let videoDescriptionSection = document.getElementById(
    "video-description-section"
  );
  videoDescriptionSection.appendChild(
    createElement("h2", ["video-title"], {}, video.title)
  );
  videoDescriptionSection.appendChild(
    createElement("p", ["video-description"], {}, video.description)
  );
}
loadVideoDetails();

// Function to load the comments
function loadComments() {
  // Wrapper for comments
  let commentsFragment = document.createDocumentFragment();
  for (let comment of video.comments) {
    let commentCard = createElement("div", ["comment-card"]);
    let profilePhoto = createElement("div", ["profile-photo"]);
    let image = createElement("img", [], {
      src: `./assets/${comment.image}`,
      alt: `${comment.name} profile-photo`,
    });
    // Wrapper for details
    let details = createElement("div", ["details"]);
    let userName = createElement("div", ["name"], {}, comment.name);
    let commentText = createElement("div", ["comment"], {}, comment.comment);
    details.appendChild(userName);
    details.appendChild(commentText);
    profilePhoto.appendChild(image);
    commentCard.appendChild(profilePhoto);
    commentCard.appendChild(details);
    commentsFragment.appendChild(commentCard);
  }
  document.getElementById("comments").appendChild(commentsFragment);
}
loadComments();
// Function to play the movie
function playMovie() {
  document.getElementById("play-icon").style.display = "none";
  document.getElementById("video").setAttribute("controls", "");
  document.getElementById("video").currentTime = 0;
  document.getElementById("video").setAttribute("autoplay", "");
}
