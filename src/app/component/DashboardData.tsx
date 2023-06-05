type PromiseData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const DashboardData = async () => {
  // const { data } = await axios.get(
  //   "https://jsonplaceholder.typicode.com/todos/1"
  // );
  const id = Math.floor(Math.random() * 10 + 1);

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("can not fetch data");
  }
  const data: PromiseData = await res.json();

  return (
    <div>
      <h1>{data.id}</h1>
      <p>{data.title}</p>
    </div>
  );
};

export default DashboardData;
