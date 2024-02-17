import CardRecruitment from "./CardRecruitment";

function Recruitment() {
  return (
    <div
      className="relative py-16 px-8 flex-col justify-center text-center md:h-[800px] lg:px-36 lg:py-24"
      id="recruit"
    >
      <div className="absolute inset-0">
        <img
          src="/images/bg_recruitment"
          alt="background_hidden"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center relative">
        <h2 className="text-2xl md:text-4xl font-bold">
          <span className="line-clamp-1 pb-4">Tuyển dụng</span>
        </h2>
        <p className="mt-2 px-8 w-sm  md:w-[670px] line-clamp-2 text-lg">
          Hãy cùng với chúng tôi tạo nên bước đột phá
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <CardRecruitment />
        </div>
      </div>
    </div>
  );
}

export default Recruitment;
