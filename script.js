
document.addEventListener("DOMContentLoaded", () => {
  const headerTitle = document.querySelector("header h1");
  headerTitle.style.opacity = 0;
  headerTitle.style.transform = "translateY(-50px)";
  
  setTimeout(() => {
    headerTitle.style.transition = "all 1s ease";
    headerTitle.style.opacity = 1;
    headerTitle.style.transform = "translateY(0)";
  }, 300);

  const galleryImages = document.querySelectorAll(".grid img");
  galleryImages.forEach(img => {
    img.addEventListener("mouseover", () => {
      img.style.transition = "transform 0.5s ease, box-shadow 0.5s ease";
      img.style.transform = "scale(1.1)";
      img.style.boxShadow = "0 0 30px rgba(255,255,255,0.6)";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
      img.style.boxShadow = "0 0 20px rgba(255,255,255,0.3)";
    });
  });
});
