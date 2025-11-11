import { useLoaderData } from "react-router";
import IssueCard from "../components/IssueCard";

const Issues = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
      {data.map((issue) => (
        <IssueCard key={issue._id} issue={issue} />
      ))}
    </div>
  );
};

export default Issues;
