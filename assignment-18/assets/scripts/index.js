// APIs
const POSTERS_API = "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346";
const VIDEO_COMMENTS_API =
  "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0";

// Function to load the poster content and inject in the DOM
$.get(POSTERS_API, (posters) => {
  let results = "";
  for (let poster of posters) {
    results += `<img src="${poster.imageUrl}" alt="${poster.title}" class="poster"/>`;
  }
  $("#posters-container").html(results);
});

// Function to load the video details and inject in the DOM
$.get(VIDEO_COMMENTS_API, (videoDetails) => {
  let videoSource = `<source src="${videoDetails.videoUrl}" type="video/mp4">`;
  $("#video").html(videoSource);
  let description = `
  <h2 class="video-title">${videoDetails.title}</h2>
  <p class="video-description">${videoDetails.description}</p>`;
  $("#video-description-section").html(description);
  let comments = "";
  for (let comment of videoDetails.comments) {
    comments += `
    <div class="comment-card">
    <div class="profile-photo">
      <img
        src=${"./assets/" + comment.image}
        alt="${comment.name} profile-photo"
      />
    </div>
    <div class="details">
      <div class="name">${comment.name}</div>
      <div class="comment">${comment.comment}</div>
    </div>
  </div>
  `;
  }
  $("#comments").html(comments);
});
