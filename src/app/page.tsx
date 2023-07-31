import SampleComponent from "./components/SampleComponent"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SampleComponent heading="Hello World" content="This is a sample component" />
    </main>
  )
}
