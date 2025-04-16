
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-hotel-900 mb-6 text-center">
            Über Hotel Serenity
          </h1>
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-12"></div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Das Hotel Serenity, gegründet im Jahr 2010, verkörpert den Inbegriff von Luxus und Eleganz im Herzen von Berlin. Unser Hotel kombiniert traditionellen Charme mit modernem Komfort und bietet eine perfekte Atmosphäre für Geschäftsreisende und Urlauber gleichermaßen.
            </p>
            <p>
              Mit unseren 150 luxuriösen Zimmern und Suiten, einem preisgekrönten Restaurant, erstklassigen Spa- und Fitnesseinrichtungen sowie flexiblen Veranstaltungsräumen erfüllen wir die höchsten Ansprüche unserer Gäste. Jedes Detail wurde sorgfältig gestaltet, um Ihnen einen unvergesslichen Aufenthalt zu bieten.
            </p>
            
            <h2>Unsere Vision</h2>
            <p>
              Unsere Vision ist es, nicht nur ein Hotel zu sein, sondern ein Zuhause fern von Zuhause für jeden unserer Gäste zu schaffen. Wir streben danach, durch exzellenten Service, persönliche Aufmerksamkeit und herausragende Gastfreundschaft zu begeistern.
            </p>
            
            <h2>Unsere Werte</h2>
            <ul>
              <li>Exzellenz in allen Aspekten unseres Service</li>
              <li>Nachhaltigkeit und Umweltbewusstsein</li>
              <li>Respekt für unsere Gäste, Mitarbeiter und die Gemeinschaft</li>
              <li>Innovation und kontinuierliche Verbesserung</li>
              <li>Authentizität und Ehrlichkeit in allem, was wir tun</li>
            </ul>
            
            <h2>Unsere Geschichte</h2>
            <p>
              Das Gebäude, in dem sich heute das Hotel Serenity befindet, hat eine reiche Geschichte, die bis ins frühe 20. Jahrhundert zurückreicht. Ursprünglich als Bankgebäude konzipiert, wurde es 2009 erworben und in ein luxuriöses Hotel umgewandelt, das die historische Architektur mit modernem Design verbindet.
            </p>
            <p>
              Seit der Eröffnung im Jahr 2010 haben wir zahlreiche Auszeichnungen erhalten, darunter den "European Luxury Hotel Award" und den "Green Hospitality Award" für unser Engagement für nachhaltige Praktiken.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
