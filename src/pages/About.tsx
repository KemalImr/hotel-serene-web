
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users2, Gem, Award } from "lucide-react";

const About = () => {
  const companyValues = [
    {
      icon: <Building2 className="w-8 h-8 text-gold-600" />,
      title: "Exzellenz",
      description: "In allen Aspekten unseres Service streben wir nach höchster Qualität"
    },
    {
      icon: <Users2 className="w-8 h-8 text-gold-600" />,
      title: "Respekt",
      description: "Für unsere Gäste, Mitarbeiter und die Gemeinschaft"
    },
    {
      icon: <Gem className="w-8 h-8 text-gold-600" />,
      title: "Innovation",
      description: "Kontinuierliche Verbesserung unserer Services"
    },
    {
      icon: <Award className="w-8 h-8 text-gold-600" />,
      title: "Authentizität",
      description: "Ehrlichkeit und Transparenz in allem, was wir tun"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-5xl font-bold text-white text-center">
            Über Hotel Serenity
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Vision Section */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-hotel-900 mb-6">
              Unsere Vision
            </h2>
            <div className="w-20 h-1 bg-gold-600 mx-auto mb-8"></div>
            <p className="text-lg text-hotel-700 leading-relaxed">
              Unsere Vision ist es, nicht nur ein Hotel zu sein, sondern ein Zuhause fern von Zuhause für jeden unserer Gäste zu schaffen. Wir streben danach, durch exzellenten Service, persönliche Aufmerksamkeit und herausragende Gastfreundschaft zu begeistern.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {companyValues.map((value, index) => (
            <Card key={index} className="border-2 border-gold-100 hover:border-gold-200 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="font-serif text-xl font-bold text-hotel-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-hotel-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold text-hotel-900 mb-6">
              Unsere Geschichte
            </h2>
            <div className="w-20 h-1 bg-gold-600 mb-8"></div>
            <div className="prose prose-lg">
              <p className="text-hotel-700 mb-6">
                Das Gebäude, in dem sich heute das Hotel Serenity befindet, hat eine reiche Geschichte, die bis ins frühe 20. Jahrhundert zurückreicht. Ursprünglich als Bankgebäude konzipiert, wurde es 2009 erworben und in ein luxuriöses Hotel umgewandelt.
              </p>
              <p className="text-hotel-700 mb-6">
                Seit der Eröffnung im Jahr 2010 haben wir zahlreiche Auszeichnungen erhalten, darunter den "European Luxury Hotel Award" und den "Green Hospitality Award" für unser Engagement für nachhaltige Praktiken.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Hotel History" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gold-100 -z-10"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
