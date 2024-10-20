// To use the images from the assest in all over the website.

export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
// export const getImageUrl = (imagePath) => {
//   try {
//       return require(`/assets${imagePath}`); // Adjust if using a different method
//   } catch (error) {
//       console.error("Error loading image:", error);
//       return "";
//   }
// };
