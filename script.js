console.log(
  "Wooden reference ➡️",
  "https://www.behance.net/gallery/209082917/40-Wooden-Art-Wall-Texture-Backgrounds?tracking_source=project_owner_other_projects"
);

let currentZoom = 1;

document.addEventListener("wheel", (event) => {
  if (event.deltaY < 0) {
    currentZoom += 0.1; // Acerca
  } else {
    currentZoom -= 0.1; // Aleja
  }
  currentZoom = Math.max(1, Math.min(1.5, currentZoom));
  document.body.style.zoom = currentZoom;
});
