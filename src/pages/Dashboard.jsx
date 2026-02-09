import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card>Card 1</Card>
      <Card>Card 2</Card>
      <Card>Card 3</Card>

      <Button>Salvar</Button>
    </div>
  )
}
