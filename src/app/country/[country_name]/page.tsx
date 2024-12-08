import "@/app/globals.css";
import Link from "next/link";
import CountryDetail from "@/app/components/Country";
// import Image from "next/image";

export default function CountryName({ params }: { params: { country_name: string } }) {
  const countries = [
    { name: "Canada", population: 38000000, capital: "Ottawa", image: "/canada.jpeg" },
    { name: "Australia", population: 26000000, capital: "Canberra", image: "/australia.jpeg" },
    { name: "London", population: 9000000, capital: "United Kingdom", image: "/london.jpeg" },
    { name: "Germany", population: 84000000, capital: "Berlin", image: "/germany.jpeg" },
    { name: "USA", population: 331000000, capital: "Washington, D.C.", image: "/USA.jpeg" },
  ];

  function findCoun(name: string) {
    return countries.find((country) => name.toLowerCase() === country.name.toLowerCase());
  }

  const result = findCoun(params.country_name);

  return (
    <div className="container text-center">
      <CountryDetail countryInf={result} url={""} />

      <div className="mt-6">
        <Link href="/">
          <span className="custom_button">Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
