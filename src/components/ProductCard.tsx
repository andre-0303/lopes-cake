interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({
  name,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-pink-500 font-bold mt-1">R$ {price.toFixed(2)}</p>
    </div>
  );
}
