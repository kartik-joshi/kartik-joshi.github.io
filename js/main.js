(function () {
  "use strict";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  // Projects
  var list = document.getElementById("project-list");
  var projects = window.PROJECTS || [];
  if (list && projects.length) {
    list.textContent = "";
    projects.forEach(function (p, i) {
      var li = el("li", "project");
      var article = el("article");
      article.setAttribute("aria-labelledby", "project-" + i);

      var num = el("p", "project-num", String(i + 1).padStart(2, "0"));
      num.setAttribute("aria-hidden", "true");
      article.appendChild(num);

      var h3 = el("h3", "project-title", p.title);
      h3.id = "project-" + i;
      article.appendChild(h3);
      article.appendChild(el("p", "project-summary", p.summary));

      if (p.results && p.results.length) {
        var ul = el("ul", "project-results");
        p.results.forEach(function (r) { ul.appendChild(el("li", null, r)); });
        article.appendChild(ul);
      }

      if (p.stack && p.stack.length) {
        var tags = el("ul", "tags");
        tags.setAttribute("aria-label", "Built with");
        p.stack.forEach(function (t) { tags.appendChild(el("li", null, t)); });
        article.appendChild(tags);
      }

      if (p.links && p.links.length) {
        var links = el("p", "project-links");
        p.links.forEach(function (l, j) {
          var a = el("a", j === 0 ? "link-primary" : "link-secondary", l.label);
          a.href = l.url;
          var sr = el("span", "visually-hidden", " for " + p.title);
          a.appendChild(sr);
          links.appendChild(a);
        });
        article.appendChild(links);
      }

      li.appendChild(article);
      list.appendChild(li);
    });
  }

  // Writing: hidden until at least one post exists
  var posts = window.POSTS || [];
  if (posts.length) {
    var section = document.getElementById("writing");
    var navItem = document.getElementById("nav-writing");
    var postList = document.getElementById("post-list");
    posts.forEach(function (post) {
      var li = el("li", "post");
      var a = el("a", "post-title", post.title);
      a.href = post.url;
      li.appendChild(a);
      if (post.date) {
        var time = el("time", "post-date");
        time.dateTime = post.date;
        var d = new Date(post.date + "T00:00:00");
        time.textContent = isNaN(d) ? post.date :
          d.toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
        li.appendChild(time);
      }
      if (post.summary) li.appendChild(el("p", "post-summary", post.summary));
      postList.appendChild(li);
    });
    section.hidden = false;
    navItem.hidden = false;
  }

  // Theme toggle
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    var root = document.documentElement;
    var media = window.matchMedia("(prefers-color-scheme: dark)");
    function current() {
      return root.getAttribute("data-theme") || (media.matches ? "dark" : "light");
    }
    function sync() {
      var dark = current() === "dark";
      toggle.setAttribute("aria-pressed", String(dark));
    }
    toggle.hidden = false;
    sync();
    media.addEventListener("change", sync);
    toggle.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      sync();
    });
  }

  // Email: assembled at runtime so the address never appears in the page source.
  var address = ["moc.oohay", "28ihsojkitrak"]
    .map(function (s) { return s.split("").reverse().join(""); })
    .reverse().join("@");
  document.querySelectorAll(".js-email").forEach(function (a) {
    a.href = "mailto:" + address;
    if (a.classList.contains("js-email-text")) a.textContent = address;
  });
  var emailRow = document.getElementById("contact-email");
  if (emailRow) emailRow.hidden = false;

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
