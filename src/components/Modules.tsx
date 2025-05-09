
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileIcon, 
  UsersIcon, 
  LayoutDashboardIcon, 
  ShoppingCartIcon, 
  PieChartIcon 
} from 'lucide-react';

const Modules = () => {
  const modules = [
    {
      title: 'الحسابات',
      icon: PieChartIcon,
      description: 'إدارة كاملة للحسابات العامة، دفتر الأستاذ، والتقارير المالية'
    },
    {
      title: 'الفواتير',
      icon: FileIcon,
      description: 'إنشاء وإدارة الفواتير، عروض الأسعار، وإشعارات الدفع بسهولة'
    },
    {
      title: 'المخازن',
      icon: ShoppingCartIcon,
      description: 'إدارة المخزون، المنتجات، المشتريات، وحركات البضائع'
    },
    {
      title: 'الموظفين',
      icon: UsersIcon,
      description: 'إدارة شؤون الموظفين، الرواتب، الإجازات، والحضور والانصراف'
    },
    {
      title: 'لوحة التحكم',
      icon: LayoutDashboardIcon,
      description: 'لوحة تحكم ذكية تعرض أهم مؤشرات الأداء وملخص الحسابات'
    }
  ];

  return (
    <section id="modules" className="py-16 md:py-24 bg-absher-beige/20 clip-diagonal-reverse">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-absher-dark mb-4">وحدات <span className="text-absher-teal">نظام أبشر</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            يتكون نظام أبشر المحاسبي من عدة وحدات متكاملة تغطي جميع احتياجات عملك
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {modules.map((module, index) => (
            <Card key={index} className="overflow-hidden shadow-absher hover:shadow-lg transition-all feature-card">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-absher-teal/10 p-4 rounded-full">
                    <module.icon className="h-8 w-8 text-absher-teal" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-absher-dark mb-3">{module.title}</h3>
                <p className="text-gray-600">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
