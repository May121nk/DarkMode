var btn = document.querySelector("button");
var root = document.documentElement;

var flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    root.style.setProperty("--primary", "#111");
    root.style.setProperty("--secondary", "#dadada");
    
    btn.innerHTML = "LIGHT";
    flag = 1;
  } else {
    root.style.setProperty("--primary", "#dadada");
    root.style.setProperty("--secondary", "#111");
    btn.innerHTML = "DARK";
    flag = 0;
  }
});
