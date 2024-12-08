
import "./globals.css";
import Link from "next/link";


export default function Home() {
  return (
    <div className="container text-center">
      <h1 className="text-4xl font-bold mb-4">Top 5 Countries Basic Information</h1>
      <h2 className="text-lg font-medium mb-8">Click Below Button to Find Out Basic Data</h2>
      
      <ul className="space-y-4">
        {["Australia", "Canada", "Germany", "London", "USA"].map((country) => (
          <li key={country}>
            <Link href={`./country/${country}`}>
              <span className="custom_button">{country}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
