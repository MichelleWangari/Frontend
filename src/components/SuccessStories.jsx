import SuccessHero from "../assets/images/AboutHeroImage.jpg"; 
import image1 from "../assets/images/pexels7.jpg";
import image2 from "../assets/images/pexels3.jpg";
import image3 from "../assets/images/pexels9.jpg";
import image4 from "../assets/images/pexels4.jpg";
import image5 from "../assets/images/pexels6.jpg";
import image6 from "../assets/images/pexels1.jpg";
import image7 from "../assets/images/pexels8.jpg";
import image8 from "../assets/images/pexels2.jpg";
import image9 from "../assets/images/pexels5.jpg";

const stories = [
  {
    name: "Mama Juma Savings Group",
    image: image1,
    story: "Tujenge helped us structure our savings, and now we've collectively invested in poultry farming. The returns are life-changing!",
    location: "Kisumu"
  },
  {
    name: "Youth Empowerment Chama",
    image: image2,
    story: "We started with 5 members. Today, we are 30 strong with ongoing small business loans, thanks to Tujenge.",
    location: "Nakuru"
  },
  {
    name: "Ujirani Women's Collective",
    image: image3,
    story: "Through Tujenge, we've grown our weekly savings from KES 500 to KES 5,000 per member, funding 12 small businesses.",
    location: "Mombasa"
  },
  {
    name: "Jitegemee Youth Group",
    image: image4,
    story: "Tujenge's tools helped us track our investments clearly. We now run a thriving car wash business with 8 employees.",
    location: "Nairobi"
  },
  {
    name: "Baraka Farmers Association",
    image: image5,
    story: "With Tujenge's guidance, we pooled resources to buy better seeds and equipment, increasing our yields by 40%.",
    location: "Eldoret"
  },
  {
    name: "Bidii Artisans Group",
    image: image6,
    story: "Our savings circle used Tujenge to secure a workshop space. We now train 15 apprentices annually.",
    location: "Kakamega"
  },
  {
    name: "Tupendane Village Bank",
    image: image7,
    story: "From small daily savings, we've built a KES 2M fund that provides emergency loans to members at low interest.",
    location: "Machakos"
  },
  {
    name: "Shining Stars Investment Club",
    image: image8,
    story: "Tujenge helped us diversify into real estate. We own 3 rental properties generating passive income.",
    location: "Thika"
  },
  {
    name: "Chania Market Traders",
    image: image9,
    story: "Our joint investment in refrigeration units through Tujenge has reduced food spoilage by 70%.",
    location: "Kiambu"
  }
];

export default function SuccessStories() {
  return (
    <div>
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${SuccessHero})` }}
      >
        <div className="absolute inset-0 bg-[#475B06] opacity-60"></div>
        <div className="relative z-10 h-full flex flex-col justify-center px-6 text-left text-[#f7c948]">
          <h1 className="text-4xl md:text-5xl font-bold italic">Success Stories</h1>
          <p className="text-white text-lg mt-4 max-w-xl">
            Real journeys from our users who are changing their lives through saving and investing together.
          </p>
        </div>
      </div>

      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#475B06] mb-12">
            Transforming Lives Through Collective Savings
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((s, index) => (
              <div 
                key={index} 
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={s.image} 
                  alt={s.name} 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg";
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{s.name}</h3>
                  <p className="text-sm text-gray-500 italic mb-3">{s.location}</p>
                  <p className="text-gray-700 text-md">"{s.story}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center py-16 bg-gray-50 text-[#475B06] px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to start your success story?</h2>
          <p className="mb-6 text-lg">Join thousands of Kenyans who are building wealth together through Tujenge.</p>
          <a
            href="/signup"
            className="inline-block px-8 py-3 bg-[#e0b238] text-[#475B06] rounded-lg hover:bg-[#f7c948] font-medium text-lg transition-colors duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}