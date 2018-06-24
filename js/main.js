let profiles;

/**
 * Fetch Profiles as soon as the page is loaded.
 */
document.addEventListener('DOMContentLoaded', (event) => {
  fetchProfiles();
});

/**
 * Fetch all Profiles and set their HTML.
 */
fetchProfiles = () => {
  DBHelper.fetchProfiles().then(profiles => {
    self.profiles = profiles;
    fillProfilesHTML();
  })
}

/**
 * Create all profiles HTML and add them to the webpage.
 */
fillProfilesHTML = (profiles = self.profiles) => {
  // todo create profile list
}

/**
 * Create profile HTML.
 */
createProfileHTML = (profile) => {
  //todo create profile card
}

/**
 * Create socialLinks HTML.
 */
createSocialLinksHTML = (socialLinks) => {
  // todo create social link list 
}

/**
 * Create socialLink HTML.
 */
createSocialLinkHTML = (link) => {
  const a = document.createElement('a');
  a.href = link.url;
  const i = document.createElement('i');
  i.className = `fa fa-${link.network}`;
  a.append(i);

  return a;
}
