const AnimeBox = ({ image, title }) => {
  return (
    <div className="container flex items-center p-5 bg-gray-800">
        <img
          className="w-52 h-40 object-cover bg-gradient-to-t from-black"
          src={image}
          alt={title + " - image"}
        />
      <h1 className="w-full text-white px-12">{title}</h1>
    </div>
  );
};

export default AnimeBox;
