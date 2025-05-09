
import { CheckIcon } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'واجهة سهلة الاستخدام',
      description: 'تصميم بسيط وسهل الاستخدام يناسب جميع المستخدمين بمختلف مستوياتهم'
    },
    {
      title: 'تقارير متكاملة',
      description: 'توليد تقارير مالية وإدارية متكاملة بضغطة زر واحدة لاتخاذ القرارات المناسبة'
    },
    {
      title: 'دعم فني متميز',
      description: 'فريق دعم فني على أهبة الاستعداد لمساعدتك في أي وقت ومكان'
    },
    {
      title: 'تحديثات مستمرة',
      description: 'تحديثات دورية مستمرة لمواكبة التطورات المحاسبية والتقنية'
    },
    {
      title: 'أمان عالي للبيانات',
      description: 'حماية قصوى لبياناتك المالية والمحاسبية مع نسخ احتياطي تلقائي'
    },
    {
      title: 'متوافق مع الضرائب',
      description: 'متوافق بشكل كامل مع متطلبات الهيئات الضريبية المحلية والدولية'
    },
    {
      title: 'متوافق مع هيئة الزكاة والدخل',
      description: 'نظام معتمد ومرتبط مع هيئة الزكاة والضريبة والجمارك (زاتكا) لإصدار فواتير مطابقة لكافة المواصفات'
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-absher-dark mb-4">مميزات <span className="text-absher-teal">نظام أبشر</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            يتميز نظام أبشر المحاسبي بالعديد من المزايا التي تساعدك على إدارة أعمالك بكفاءة وفعالية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 feature-card transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-absher-teal/10 p-2 rounded-full mr-4">
                  <CheckIcon className="h-6 w-6 text-absher-teal" />
                </div>
                <h3 className="text-xl font-semibold text-absher-dark">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
