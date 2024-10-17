import { CountryDetails } from "@/app/types/types";
import Countries from "../../component/Countries";


const CountryName = ({ params }: { params: { country_name: string } }) => {
  const countryDetails: CountryDetails[] = [
    {
      name: "Pakistan",
      capital: "Islamabad",
      population: "241.5 million",
    },
    {
      name: "Australia",
      capital: "Canberra",
      population: "26.6 million",
    },
    {
      name: "Canada",
      capital: "Ottawa",
      population: "39.8 million",
    },
    {
      name:"France",
      capital: "Paris",
      population: "68.3 million",
    },
    {
      name: "China",
      capital: "Beijing",
      population: "1.4 billion",
    },
  ];

  const country = countryDetails.find(
    (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
  );

  if (!country) {
    return (
      <h1 className="text-white text-center text-2xl"> Country Not Found! </h1>
    );
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
  
      
      <Countries
        name={country.name}
        population={country.population}
        capital={country.capital}
      />
      
          
       
     
    </div>
  );
  
  
};

export default CountryName;