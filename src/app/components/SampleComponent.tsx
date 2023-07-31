export default function SampleComponent(props: any) {
  const getTime = () => {
    const date = new Date();
    return date.toLocaleTimeString();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl">{props.heading}</h1>
      <p className="text-xl">{props.content}</p>
      <p className="text-xl">{getTime()}</p>
    </main>
  );
}
