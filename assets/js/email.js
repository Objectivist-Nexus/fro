// Map from display text to match to [display text override, email target, subject line, body]
var emails = {
  "main email": ["fro@frontrangeobjectivism.com", "fro@frontrangeobjectivism.com", "Web Inquiry: [YOUR SUBJECT HERE]", null],
  "dan sullivan 1frog": ["Dan Sullivan", "dansullivanstl@gmail.com", "Interest in 1FROG", null]
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
