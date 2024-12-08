import Image from "next/image";
interface CountryInformation {
  name: string;
  population: number;
  capital: string;
  image: string;
}
interface CountryProps {
  countryInf?: CountryInformation;
  url: string;
}

export default function CountryDetail(data: CountryProps) {
  
  return (
    <div className="container text-center space-y-6">
      {data.countryInf ? (
        <div>
          <h1 className="text-3xl font-bold">{`Country Name: ${data.countryInf.name}`}</h1>
          <Image 
            src={`${data.countryInf.image}`}  
            alt={`Image of ${data.countryInf.name}`} 
            width={400} 
            height={300}  
            className="w-full max-w-sm mx-auto rounded-lg shadow-lg mt-4"
          />
            
          <p className="text-xl mt-4">{`Population: ${data.countryInf.population.toLocaleString()}`}</p>
          <p className="text-xl">{`Capital: ${data.countryInf.capital}`}</p>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold">{`${data.url} Not Found`}</h1>
        </div>
      )}
    </div>
  );
}


