class UI {
    constructor() {
      this.profile = document.getElementById("profile");
    }
  
    showProfile(user) {
      this.profile.innerHTML = `
        <div class="profile-card">
        <div class="profile-img">
          <img src="${user.avatar_url}" alt="Avatar" class=ProfilePicture>
          
          <a href="${user.html_url}" target="_blank" class="viewBtn">View Profile</a>
          </div>
          <div class=profile-info>
          <h2>${user.name}</h2>
          <p>${user.bio}</p>
          <ul>
            <li>Public Repos: ${user.public_repos}</li>
            <li>Followers: ${user.followers}</li>
            <li>Following: ${user.following}</li>
          </ul>
          </div>
        </div>
      `;
    }
  
    showRepos(repos) {
      let output = `<h3>Latest Repos</h3>`;
      repos.forEach(repo => {
        output += `
          <div class="repo-card">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            <p>Stars: ${repo.stargazers_count} | Watchers: ${repo.watchers_count}</p>
          </div>
        `;
      });
      this.profile.innerHTML += output;
    }
  
    clearProfile() {
      this.profile.innerHTML = "";
    }
  }
  