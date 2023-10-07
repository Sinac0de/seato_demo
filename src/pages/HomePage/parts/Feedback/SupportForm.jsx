import supportImg from "src/assets/images/support.png";
import InputComponent from "src/components/common/InputComponent";

function SupportForm() {
  return (
    <div className="bg-[#DADBDC9C] w-full lg:w-1/2 max-w-[612px] p-10 rounded-[28px] relative">
      <div className="flex flex-col items-end">
        <div className="flex flex-col gap-2">
          <h2 className="md:text-[22px] text-xl font-bold">
            مشاوره و پشتیبانی از سیتو
          </h2>
          <p className="font-normal md:text-xl text-base">
            در صورتی که نیاز به پشتیبانی دارید فرم زیر را پر کنید
          </p>
        </div>
        <form className="flex flex-col gap-3 items-end w-full lg:w-3/5 mt-3">
          <InputComponent
            id="name"
            placeHolder="نام و نام خانوادگی"
            type="text"
          />
          <InputComponent id="tel" placeHolder="شماره موبایل" type="tel" />
          <InputComponent id="email" placeHolder="ایمیل" type="email" />
          <button className="bg-[#E0BFB8] font-bold text-xs md:text-base p-3 px-8 rounded-full w-fit">
            درخواست پشتیبانی
          </button>
        </form>
      </div>
      {/* image */}
      <img
        src={supportImg}
        alt="Support staff"
        className="absolute lg:top-24 -right-16 md:-right-28 lg:-right-24 -bottom-4 w-[150px] md:w-[200px] lg:w-fit"
      />
    </div>
  );
}

export default SupportForm;
