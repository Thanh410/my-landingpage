function CardRecruitment() {
  return (
    <a
      href="#"
      className="shadow-lg bg-white rounded-sm lift h-200 mt-4 flex justify-center items-center md:h-[120px] hover:-translate-y-1 duration-200"
    >
      <div className="p-5 flex justify-center items-center rounded-lg ">
        <div>
          <span className="bg-red-400 text-white w-11 h-11 fs-20 me-4 p-2 rounded-full">
            SD
          </span>
        </div>
        <div className="flex">
          <span className="text-sm">Full Time</span>
          <h4 className="text-sm">Senior Graphic Designer</h4>
          <p className="text-sm text-blue-400">San Francisco, US</p>
        </div>
      </div>
    </a>
  );
}

export default CardRecruitment;
