document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("div.highlight").forEach(function (block) {
    var pre = block.querySelector("pre");
    if (!pre) return;

    var button = document.createElement("button");
    button.className = "copy-code-button";
    button.type = "button";
    button.innerText = "Copy";
    button.setAttribute("aria-label", "Copy code to clipboard");

    button.addEventListener("click", function () {
      navigator.clipboard.writeText(pre.innerText).then(function () {
        button.innerText = "Copied!";
        button.classList.add("copied");
        setTimeout(function () {
          button.innerText = "Copy";
          button.classList.remove("copied");
        }, 1500);
      });
    });

    block.appendChild(button);
  });
});