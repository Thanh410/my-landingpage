import CardItem from "./CardItem";
import { cardServices } from "../contains";

function Service() {
  return (
    <div
      className="py-16 px-8 flex-col justify-center text-center md:h-[800px] lg:px-36 lg:py-24"
      id="service"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl pb-4 font-bold md:line-clamp-1">
          Dịch vụ của chúng tôi
        </h2>
        <p className="mt-2 px-8 w-sm line-clamp-2 md:w-[670px] text-lg">
          Giao Nhanh là dịch vụ cung cấp tiện ích toàn diện cho đia phương, với
          các dịch vụ liên quan mật thiết với nhau, trong đó dịch vụ vận chuyển
          hàng hoá
        </p>
      </div>
      <div className="grid grid-cols-1 mt-8 px-8 gap-4 rounded-sm md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {cardServices.map((item, index) => (
          <div key={index}>
            <CardItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
