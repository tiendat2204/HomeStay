import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import image1 from "@/assets/z6072270798164_dcdad2f25e2ead39e70c948186c72723.jpg";
import image2 from "@/assets/z6072270769402_48f42c8a92c8500e4db333ec0f8c8f9e.jpg";
import image3 from "@/assets/z6072270780513_a10097509891d99bfcd85f7b3326aac6.jpg";
import image4 from "@/assets/z6072270786138_c4a5b9f29bcb9472a5d2e97ba375820f.jpg";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Phòng ngủ được trang bị giường êm ái, ánh sáng tự nhiên và màu sắc nhẹ nhàng, giúp bạn có giấc ngủ sâu sau ngày dài khám phá.",
      name: "Phòng ngủ",
      designation: "Không gian nghỉ ngơi lý tưởng",
      src: image1,
    },
    {
      quote:
        "Sân vườn rộng rãi được thiết kế với cây xanh và lối đi lát đá, mang lại không gian thư thái, lý tưởng để tận hưởng không khí trong lành của biển.",
      name: "Sân vườn",
      designation: "Không gian xanh ngoài trời",
      src: image2,
    },
    {
      quote:
        "Khu vườn ngoài trời với bàn ghế và ánh đèn lung linh, là nơi lý tưởng để tổ chức các bữa tiệc BBQ cùng gia đình và bạn bè.",
      name: "Khu vườn ngoài trời",
      designation: "Không gian thư giãn ngoài trời",

      src: image3,
    },
    {
      quote:
        "Khu vực cà phê đầy đủ tiện nghi, nơi bạn có thể thưởng thức những tách cà phê thơm ngon giữa khung cảnh biển xanh mát.",
      name: "Khu vực cà phê",
      designation: "Thư giãn và ấm cúng",
      src: image4,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
