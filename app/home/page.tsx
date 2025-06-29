import VideoSection from "@/components/Home";

export default function HomePage() {

  return (
    <>
     
       <div className="w-full py-16 mt-[-60px] bg-[#fadae5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
         
          <div className="space-y-6">
            <h4 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              SURPRISE SOMEONE TODAY !
            </h4>
            <p className="text-lg text-gray-600 leading-relaxed">
              At our flower delivery service, we believe every bouquet tells a story. 
              Our dedicated team of florists carefully handpicks each bloom, ensuring 
              that every arrangement is a masterpiece of nature's beauty.
            </p>
         
        
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Shop Our Collection
            </button>
          </div>

          {/* Video Section */}
          <div className="relative">
           <VideoSection />
            
            {/* Decorative background elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-200 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
