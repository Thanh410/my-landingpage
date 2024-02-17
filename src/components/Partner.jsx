function Partner() {
  const partners = [
    { id: 1, name: "Partner 1", logo: "/images/partner1.png" },
    { id: 2, name: "Partner 2", logo: "/images/partner2.png" },
    { id: 3, name: "Partner 3", logo: "/images/partner3.jpg" },
    { id: 4, name: "Partner 4", logo: "/images/partner4.png" },
    { id: 5, name: "Partner 5", logo: "/images/partner5.jpg" },
  ];

  return (
    <div className="bg-gray-200 py-16 px-8 grid grid-rows-1 justify-center items-center text-center md:py-16 lg:py-24 lg:px-36">
      <div className="">
        <h2 className="text-4xl font-bold">
          <span className="text-2xl md:line-clamp-1 pb-4 md:text-4xl">
            Đối tác của chúng tôi
          </span>
        </h2>
        <div className="mt-8 grid grid-cols-4 items-center justify-center gap-4 overflow-x-auto scrollbar-hide  hover: md:grid-cols-7 md:gap-4">
          {partners.map((partner) => (
            <div key={partner.id} className="w-full md:mx-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-auto aspect-video object-contain md:h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partner;
