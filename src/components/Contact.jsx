import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SimpleMap from "./Map/Map";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm();

  const focusField = (fieldName) => {
    const input = document.querySelector(`input[name="${fieldName}"]`);
    const label = document.querySelector(`label[for="${fieldName}"]`);
    if (input) {
      input.focus();
      setError(fieldName, {
        type: "manual",
        message: "Trường này là bắt buộc",
      });
      toast.warn(
        `Vui lòng điền đầy đủ thông tin ${label.textContent.toLowerCase()}`
      );
    }
  };

  const onSubmit = () => {
    const serviceId = "service_4iyjxcb";
    const templateId = "template_0or6j2o";
    try {
      setLoading(true);
      emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey: "UXZiWeZ-8KqC3783b",
      });
      reset();
      toast.success("Gửi thành công!");
    } catch (error) {
      setTimeout(() => {
        toast.warning("Lỗi vui lòng kiểm tra lại!");
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="px-8 py-16  flex-col justify-center items-center text-center md:h-[800px] lg:px-36 lg:py-24"
      id="contact"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          <span className="line-clamp-1 pb-4">Liên hệ</span>
        </h2>
        <p className="mt-2 line-clamp-2 text-lg">
          Hãy liên hệ với chúng tôi để được tư vấn giải pháp, dịch vụ
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 md:h-[400]">
        <form
          ref={form}
          className="h-[200] bg-gray-200 p-4 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-2">
            <label
              className="block text-left text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Họ và tên<span className="text-red-500">*</span>
            </label>
            <input
              className={`border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                errors.name ? "border-red-500" : ""
              }`}
              type="text"
              id="name"
              name="name"
              {...register("name", { required: "Họ và tên là bắt buộc" })}
              maxLength={50}
              placeholder={
                errors.name != null
                  ? errors.name.message
                  : "Nhập họ và tên của bạn"
              }
            />
          </div>
          <div className="mt-2">
            <label
              className="block text-left text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              className={`border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              type="email"
              id="email"
              name="recipient"
              {...register("email", { required: "Email là bắt buộc" })}
              maxLength={150}
              placeholder={
                errors.email != null
                  ? errors.email.message
                  : "Nhập địa chỉ email của bạn"
              }
            />
          </div>
          <div className="mt-2">
            <label
              className="block text-left text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Số điện thoại<span className="text-red-500">*</span>
            </label>
            <input
              className={`border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                errors.phone ? "border-red-500" : ""
              }`}
              type="phone"
              id="phone"
              name="phone"
              {...register("phone", {
                required: "Số điện thoại là bắt buộc",
              })}
              maxLength={10}
              placeholder={
                errors.phone != null
                  ? errors.phone.message
                  : "Nhập số điện thoại của bạn"
              }
            />
          </div>
          <div className="mt-2">
            <label
              className="block text-left text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Nội dung
            </label>
            <textarea
              className={`border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                errors.message ? "border-red-500" : ""
              }`}
              id="message"
              maxLength={250}
              rows="2"
              name="message"
              placeholder="Nhập nội dung tin nhắn"
            ></textarea>
          </div>
          <button
            className="mt-4 bg-blue-500 float-end text-white py-2 px-4 rounded-md hover:bg-blue-600"
            type="submit"
            disabled={loading}
            onClick={() => {
              if (errors.name) {
                focusField("name");
              } else if (errors.email) {
                focusField("email");
              } else if (errors.phone) {
                focusField("phone");
              } else if (errors.message) {
                focusField("message");
              } else {
                clearErrors();
              }
            }}
          >
            Gửi
          </button>
          <ToastContainer />
        </form>
        <div className="mt-4">
          <SimpleMap />
        </div>
      </div>
    </div>
  );
}

export default Contact;
