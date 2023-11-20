export const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(({ id, largeImageURL, tags, webformatURL }) => (
    <li key={id}>
      <img
        src={webformatURL}
        alt={tags}
        width={360}
        height={300}
        onClick={() => onClick(largeImageURL)}
      />
    </li>
  ));
};
