export default function Button({ children }) {
  return (
    <button className="bg-primary hover:bg-green-600 text-white px-4 py-2 rounded transition">
      {children}
    </button>
  )
}
