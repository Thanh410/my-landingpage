import { stats } from "../contains";

function Stats() {
  return (
    <section className="justify-between align-center flex-row flex-wrap ">
      <div
        className="grid grid-cols-3 px-8 md:grid-cols-3 text-white lg:px-36 bg-cover"
        style={{
          backgroundImage: `url('https://sandbox.elemisthemes.com/assets/img/photos/bg2.jpg')`,
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="text-center p-2 lg:flex lg:justify-center md:p-8"
          >
            <h4 className="text-sm font-normal md:text-md lg:font-medium lg:text-2xl">
              {item.value}
            </h4>
            <p className="ml-2 text-sm md:font-medium md:text-md lg:text-2xl">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
