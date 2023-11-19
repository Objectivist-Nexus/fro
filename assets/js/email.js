// Map from display text to match to [display text override, email target, subject line, body]
var emails = {
  "main email": ["web@frontrangeobjectivism.com", "web@frontrangeobjectivism.com", "Web Inquiry: [YOUR SUBJECT HERE]", null],
  "calendar inquiry": ["request to be added via email", "web@frontrangeobjectivism.com", "FRO Calendar List Request", "I would like to receive calendar invitations for the following FROG lists:"],
  "dan sullivan 1frog": ["Dan Sullivan", "dan@frontrangeobjectivism.com", "Interest in 1FROG", null],
  "david weatherell 2frog": ["David Weatherell", "david@frontrangeobjectivism.com", "Interest in 2FROG", null],
  "vicki genther 3frog": ["Vicki Genther", "vicki@frontrangeobjectivism.com", "Interest in 3FROG", null],
  "kelsey robertson 3frog": ["Kelsey Robertson", "kelsey@frontrangeobjectivism.com", "Interest in 3FROG", null],
  "david weatherell 4frog": ["David Weatherell", "david@frontrangeobjectivism.com", "Interest in 4FROG", null],
  "vicki genther frolic": ["Vicki Genther", "vicki@frontrangeobjectivism.com", "Interest in FROLIC", null],
  "kelsey robertson frolic": ["Kelsey Robertson", "kelsey@frontrangeobjectivism.com", "Interest in FROLIC", null]
}

$(document).ready(function() {
  $('a.email').each(function(index) {
    if (this.innerHTML.toLowerCase() in emails) {
      // Rewrite mailto
      var mailto = "mailto:" + emails[this.innerHTML.toLowerCase()][1];
      if (emails[this.innerHTML.toLowerCase()][2] !== null || emails[this.innerHTML.toLowerCase()][3] !== null) {
        mailto += "?";
      }
      if (emails[this.innerHTML.toLowerCase()][2] !== null) {
        mailto += "subject=" + emails[this.innerHTML.toLowerCase()][2];
      }
      if (emails[this.innerHTML.toLowerCase()][2] !== null && emails[this.innerHTML.toLowerCase()][3] !== null) {
        mailto += "&";
      }
      if (emails[this.innerHTML.toLowerCase()][3] !== null) {
        mailto += "body=" + emails[this.innerHTML.toLowerCase()][3];
      }
      this.href = mailto;
    }
    // Rewrite display text, if set
    if (emails[this.innerHTML.toLowerCase()][0] !== null) {
      this.innerHTML = emails[this.innerHTML.toLowerCase()][0];
    }
  });
});
