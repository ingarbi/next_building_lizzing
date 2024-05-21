import PropertyCard from "@/components/PropertyCard";
import properties from "@/properties.json";
import Link from "next/link";

const HomeProperties = () => {
  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h3 className="text-3xl font-bold text-zinc-700 mb-6 text-center">
            Может быть Вам подойдет...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties === 0 ? (
              <p>Ничего не найдено</p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>
      <section className='m-auto max-w-lg my-10 px-6'>
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          Смотреть все варианты
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
