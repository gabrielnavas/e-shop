export default function Home() {
  return (
    <div>
      {new Array(60).fill('').map((_, index) => (<div key={index}>E-Shopa</div>))}
    </div>
  )
}
