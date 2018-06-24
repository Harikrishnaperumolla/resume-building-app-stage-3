/**
 * Common database helper functions.
 */
class DBHelper {
  /**
   * Database URL.
   * Change this to profiles.json file location on your server.
   */
  static get DATABASE_URL() {
    //const port = 8887// Change this to your server port
    return 'data/profiles.json';
  }

  /**
  * Fetch all Profiles.
  */
  static fetchProfiles() {
    // Fetch profiles from network
    // todo
  }

  /**
  * Fetch all Profile.
  */
  static fetchProfile(id) {
    // Fetch profiles from network
    // todo
  }

  /**
   * Fetch a profile by its ID.
   */
  // static fetchProfileById(id){
  //     DBHelper.fetchProfiles()
  //     .then(profiles => {
  //       // Filter profiles to have only given id
  //       const results = profiles.filter(r => r.id == id);
  //       return results;
  //     })
  // }

  /**
   * profile image URL.
   */
  static imageUrlForProfile(profile) {
    return (`img/${profile.pic}`);
  }

  /**
   * profile URL.
   */
  static profileUrl(id) {
    return (`data/${id}.json`);
  }

  /**
   * Restaurant page URL.
   */
  static urlForProfile(profile) {
    return (`./resume.html?id=${profile.id}`);
  }
}
