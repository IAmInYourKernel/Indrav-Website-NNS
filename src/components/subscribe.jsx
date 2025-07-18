const Subscribe = () => {
  return (
    <section className="bg-[#1667C1] text-white rounded-xl px-8 py-8 max-w-4xl mx-auto my-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        
       
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Join Indrav—Your Gateway to Smarter Healthcare
          </h2>
          <p className="text-sm md:text-base text-white/80">
            Subscribe today to access connected health services, seamless digital care,
            and a healthier tomorrow—powered by Indrav.
          </p>
        </div>

        
        <form className="flex w-full md:w-auto gap-2">
          <input
            type="email"
            placeholder="Enter Your work email"
            className="px-3 py-3 rounded-md text-black w-full md:w-72 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black px-5 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
          >
            Get started
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
