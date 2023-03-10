// APIs
const POSTERS_API = "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346";
const VIDEO_COMMENTS_API =
  "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0";

$(function () {
  // Function to load the poster content and inject in the DOM
  $.get(POSTERS_API, (posters) => {
    let posterContainer = $("#posters-container");
    for (let poster of posters) {
      posterContainer.append(
        $("<img>", { src: poster.imageUrl, alt: poster.title, class: "poster" })
      );
    }
  });
  // Function to load the video details and inject in the DOM
  $.get(VIDEO_COMMENTS_API, (videoDetails) => {
    $("#video").append(
      $("<source>", { src: videoDetails.videoUrl, type: "video/mp4" })
    );
    $("#video-description-section").append(
      $("<h2>", { class: "video-title" }).text(videoDetails.title)
    );
    $("#video-description-section").append(
      $("<p>", { class: "video-description" }).text(videoDetails.description)
    );
    let comments = "";
    for (let comment of videoDetails.comments) {
      $("#comments").append(
        $("<div>", { class: "comment-card" }).append([
          $("<div>", { class: "profile-photo" }).append(
            $("<img>", {
              src: `${"./assets/" + comment.image}`,
              alt: `${comment.name} profile-photo`,
            })
          ),
          $("<div>", { class: "details" }).append([
            $("<div>", { class: "name" }).text(comment.name),
            $("<div>", { class: "comment" }).text(comment.comment),
          ]),
        ])
      );
    }
  });
});
