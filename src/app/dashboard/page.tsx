import axios from "axios";
import { Suspense } from "react";
import DashboardData from "../component/DashboardData";

type PromiseData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const metadata = {
  title: "Dashboard",
  description: "fetches the data for post ",
};

const page = () => {
  return (
    <>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ea
        harum quod quas doloremque accusantium itaque neque laborum maxime, at
        repudiandae dolores excepturi quia, aliquid, magnam doloribus pariatur
        provident possimus?
      </div>
      <br />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        explicabo dolorum nam, ducimus dicta sed expedita odio cum esse autem
        ipsum nisi et laboriosam saepe, sunt iusto non quibusdam cumque.
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        {/* @ts-expect-error Server Component */}
        <DashboardData />
      </Suspense>
    </>
  );
};

export default page;
