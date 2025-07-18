import doc1 from "../assets/doc1.png";
import doc2 from "../assets/doc2.png";
import doc3 from "../assets/doc3.png";

const Testimonials = () => {
  const feedback = [
    {
      image: doc1,
      name: "Dr. Ronit Iyer",
      role: "Chief Medical Officer – Sanjeevani Multispecialty Hospital",
      message:
        "Indrav has been a game changer for our hospital. Their unified health tech platform helped us digitize patient records, streamline appointments, and improve patient outcomes. Their team truly understands the healthcare ecosystem and delivers with empathy and precision.",
    },
    {
      image: doc2,
      name: "Ramesh Kumar",
      role: "Chronic Care Patient\nBengaluru",
      message:
        "Before Indrav, managing my diabetes care meant juggling multiple apps and doctor visits. Now, everything is integrated in one place—from prescriptions to lab results. It’s simple, efficient, and truly built for people like me",
    },
    {
      image: doc3,
      name: "Anit Das",
      role: "Program Manager – Seva Health Foundation",
      message:
        "We’ve collaborated with Indrav on multiple rural health initiatives. Their digital tools helped us reach remote communities faster and with better accuracy. What stands out is their mission-first approach and deep respect for accessibility",
    },
  ];

  return (
    <section
      id="testimonials"
      className="min-h-screen flex flex-col justify-center items-center text-white px-4 pt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        What our Clients are saying about us!
      </h2>

      {/* Cards row */}
      <div className="flex flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto flex-wrap md:flex-nowrap">
        {feedback.map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-300 text-black rounded-xl p-6 pt-20 shadow-lg w-80 flex flex-col justify-between items-center text-center"
          >
            {/* Circle Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-full absolute -top-12"
            />

            {/* Message */}
            <p className="mb-6">{item.message}</p>

            {/* Name and Role */}
            <div>
              <h4 className="text-lg font-semibold">{item.name}</h4>
              <p className="text-sm whitespace-pre-line">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
