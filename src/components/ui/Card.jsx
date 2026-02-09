export default function Card({ children }) {
  return (
    <div className="bg-white dark:bg-secondary rounded shadow p-4">
      {children}
    </div>
  )
}
