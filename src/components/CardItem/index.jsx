/* eslint-disable react/prop-types */
function CardItem({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative group">
        <img
          className="w-full h-60 aspect-video object-cover rounded-md transition-transform duration-300 transform scale-100 group-hover:scale-105 md:h-40 lg:h-60"
          src={item.src}
          alt={item.name}
        />
      </div>

      {item.title !== undefined ? (
        <div className="p-4">
          <h2 className="text-lg font-medium">{item.title}</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CardItem;
