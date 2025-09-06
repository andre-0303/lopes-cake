interface ComboProps {
  name: string
  price: string
  imageUrl: string
}

function ComboCard({ name, price, imageUrl }: ComboProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-4 flex space-x-4">
      <img
        src={imageUrl}
        alt={name}
        className="w-20 h-20 rounded-lg object-cover"
      />

      <div className="flex text-end flex-col justify-between flex-1">
        <div className="line-clamp-2">
          <h4 className="text-lg font-semibold">{name}</h4>
        </div>

        <p className="text-pink-500 font-bold mt-1">R$ {price.toFixed(2)}</p>
        
      </div>
    </div>
  )
}

export default ComboCard
