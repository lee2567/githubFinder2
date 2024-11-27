const github = new GitHub();
const ui = new UI();


const defaultUser = "lee2567";

document.addEventListener("DOMContentLoaded", () => {
  github.getUser(defaultUser).then(data => {
    if (data.profile.message === "Not Found") {
      ui.clearProfile();
    } else {
      ui.showProfile(data.profile);
      ui.showRepos(data.repos);
    }
  });

  document.getElementById("searchUser").value = defaultUser;
});

document.getElementById("searchUser").addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
   
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
      
        ui.clearProfile();
      } else {
      
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
   
    ui.clearProfile();
  }
});
