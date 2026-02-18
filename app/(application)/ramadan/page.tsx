import { getRamadanDataAction } from "@/app/actions/ramadan";
import RamadanComponent from "@/lib/features/ramadan";

export const dynamic = "force-dynamic";

const Page = async () => {
  const response = await getRamadanDataAction();

  return (
    <RamadanComponent data={response?.data} />
  );
};

export default Page;
