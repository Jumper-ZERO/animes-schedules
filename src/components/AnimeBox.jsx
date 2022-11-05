import Boton from './AnimeBox.boton';
const AnimeBox = ({ image, title, status }) => {
  return (
    <div className="container flex items-center py-5 px-3 bg-gray-800">
      <figure className="relative">
        <img
          className="min-w-[150px] max-h-[80px] object-cover bg-gradient-to-t from-black"
          src={image}
          alt={title + " - image"}
        />
        <Boton status={status} />
      </figure>
      <h1 className="w-full text-white pl-4 text-xs">{title}</h1>
    </div>
  );
};

export default AnimeBox;
