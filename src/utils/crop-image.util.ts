const cropImage = (url: string) => {
  if (!url) {
    return "https://placehold.co/600x400?text=Image+Not+Available";
  }

  const media = "media/";
  const idx = url.indexOf(media) + media.length;
  return url.slice(0, idx) + "crop/600/400/" + url.slice(idx);
};

export default cropImage;
