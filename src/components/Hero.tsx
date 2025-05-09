
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-absher-beige/30 to-white clip-diagonal overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-right order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-absher-dark mb-4">
              نظام <span className="text-absher-teal">أبشر</span> المحاسبي
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-absher-dark mb-6">
              أفضل نظام محاسبي متكامل لإدارة أعمالك
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              نظام متكامل لإدارة الشركات والمؤسسات بجميع أحجامها. يوفر حلول محاسبية متكاملة للفواتير والمخازن والحسابات وإدارة الموظفين بكفاءة عالية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center sm:justify-start">
              <Button className="bg-absher-teal hover:bg-absher-teal/90 text-white px-8 py-6 text-lg w-full sm:w-auto">
                طلب عرض مجاني
              </Button>
              <Button variant="outline" className="border-absher-teal text-absher-teal hover:bg-absher-teal/10 px-8 py-6 text-lg w-full sm:w-auto">
                تواصل معنا
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end order-1 md:order-2 animate-float">
            <img 
              src="/lovable-uploads/927062b5-042b-4a09-8c26-a98f8d3f7130.png" 
              alt="نظام أبشر المحاسبي" 
              className="max-w-full md:max-w-lg xl:max-w-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
