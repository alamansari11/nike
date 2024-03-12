import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
const Hero = () => {
  return (
    <section
      id="Home"
      className="w-full flex xl:flex-row flex col justify-center min-h-scree gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {
            statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))
          }
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center">
        <img src={bigShoe1} alt="shoe collection" width={610} height={500}className="object-contain relative z-10" />
        <div>
          {
            shoes.map((shoe) =>(
              <div key={shoe}>
                {/* <ShoeCard /> */}
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Hero;
