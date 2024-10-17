import { CountryDetails } from '@/app/types/types';
import Link from "next/link";

const CountryDetail: React.FC<CountryDetails> = ({ name, population, capital }) => {
  return (
    <div className="relative z-10 text-center mx-10 bg-gray-400 rounded-lg p-6">
      <div className="text-gray-900 text-center text-xl p-4 font-bold">
        <h1 className="m-4">Name: {name}</h1>
        <h1 className="m-4">Population: {population}</h1>
        <h1 className="m-4">Capital: {capital}</h1>
        <Link href="/country">
            <span className="m-2 p-3 bg-gray-800 rounded-md text-base text-white inline-block cursor-pointer hover:bg-gray-700">
              Back
            </span>
          </Link>
      </div>
    </div>
  );
};

export default CountryDetail;