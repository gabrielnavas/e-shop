export default function Home() {
  return (
    <div>
      {new Array(1000).fill('').map((_, index) => (<div key={index}>E-Shopa</div>))}
    </div>
  )
}
