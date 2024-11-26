import { Button } from "@/components/ui/button";
import image1 from "@/assets/z6072270798164_dcdad2f25e2ead39e70c948186c72723.jpg";
import image2 from "@/assets/z6072270769402_48f42c8a92c8500e4db333ec0f8c8f9e.jpg";
import image3 from "@/assets/z6072270780513_a10097509891d99bfcd85f7b3326aac6.jpg";
import image4 from "@/assets/z6072270786138_c4a5b9f29bcb9472a5d2e97ba375820f.jpg";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-18 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#4AB3F4] to-[#064273] text-transparent bg-clip-text">
              Nhà bên biển
            </span>
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#FFA07A] to-[#FF4500] text-transparent bg-clip-text">
              Homestay
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Trải nghiệm kỳ nghỉ tuyệt vời với không gian yên bình và view biển
          tuyệt đẹp. Hãy đến và tận hưởng những khoảnh khắc thư giãn tại Nhà bên
          biển.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="https://www.facebook.com/tnss.phat" target="blank">
            <Button className="w-full md:w-1/3">Đặt phòng ngay</Button>
          </a>

          <Button variant="outline" className="w-full md:w-1/3">
            Xem thêm
          </Button>
        </div>
      </div>

      {/* Hero images section */}
      <div className="grid grid-cols-2 gap-4">
        <img
          src={image1}
          alt="Nhà bên biển view 1"
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
        <img
          src={image2}
          alt="Nhà bên biển view 2"
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
        <img
          src={image3}
          alt="Nhà bên biển view 3"
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
        <img
          src={image4}
          alt="Nhà bên biển view 4"
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
