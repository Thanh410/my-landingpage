import CardItem from "./CardItem";
import { cardItems } from "../contains";

function Introduce() {
  return (
    <div
      className="py-16 px-8 grid grid-row-2 md:h-[800px] lg:px-36 lg:py-24 bg-gray-200"
      id="introduce"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex justify-center items-start">
          <img
            className="w-1/2 lg:w-[100%]"
            src="https://thomi.com.vn/wp-content/uploads/2023/08/logo2.63463ef7.png"
            alt="logo"
          />
        </div>
        <div className="flex-3">
          <h2 className="text-2xl pb-4 font-bold text-ellipsis md:line-clamp-1 md:text-4xl">
            Về chúng tôi
          </h2>
          <p className="mt-4 truncate-4-lines line_description line-clamp-2">
            Với hơn 7 năm hoạt động trong lĩnh vực Gia công phần mềm CNTT ,
            Thomi Technology tự tin trở thành công ty gia công phần mềm và thiết
            bị thông minh mang đến chất lượng tốt nhất cho khách hàng trong và
            ngoài nước.
          </p>
          <p className="truncate-4-lines line_description">
            Chúng tôi mang đến các sản phẩm, dịch vụ trong nhiều lĩnh vực khác
            nhau từ nhà thông minh, nông trại thông minh cho đến các dịch vụ
            Marketing online, giải pháp phần mềm, giải pháp IOT – Internet of
            thing và cả AI – Trí tuệ nhân tạo được nghiên cứu, kiểm tra kĩ lưỡng
            trước khi đến tay khách hàng. Hãy đồng hành với chúng tôi để cùng
            nhau tạo ra những sản phẩm phần mềm chất lượng cao ra thị trường
            ngay hôm nay! Chúng tôi mang đến các sản phẩm, dịch vụ trong nhiều
            lĩnh vực khác nhau từ nhà thông minh, nông trại thông minh cho đến
            các dịch vụ Marketing online, giải pháp phần mềm, giải pháp IOT –
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        {cardItems.map((item, index) => (
          <div key={index}>
            <CardItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Introduce;
