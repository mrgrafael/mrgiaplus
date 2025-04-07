// animations.js
export function triggerAnimation(type) {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = 0;
  container.style.left = 0;
  container.style.width = "100vw";
  container.style.height = "100vh";
  container.style.zIndex = 9999;
  container.style.pointerEvents = "none";

  const emoji = {
    fogos: "🚀",
    champanhe: "🍾",
    brilhos: "✨",
    explosao: "💥",
  }[type];

  for (let i = 0; i < 50; i++) {
    const el = document.createElement("div");
    el.innerText = emoji;
    el.style.position = "absolute";
    el.style.fontSize = "2rem";
    el.style.top = `${Math.random() * 100}%`;
    el.style.left = `${Math.random() * 100}%`;
    el.style.animation = `float ${2 + Math.random() * 2}s ease-out infinite`;
    container.appendChild(el);
  }

  document.body.appendChild(container);

  setTimeout(() => {
    document.body.removeChild(container);
  }, 4000);

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes float {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(-100px); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}
