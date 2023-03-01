import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { useSearchUserByIdQuery } from "../store/unistoryApi";
import ErrorPage from "./ErrorPage";
import { PlanetCircle } from "../components/PlanetCircle";
export const UserPage = () => {
  const { id } = useParams(); // id для fetching даты из бэкенда
  const { data, isLoading, isError } = useSearchUserByIdQuery(Number(id)); // fetch запрос по id
  if (isError) {
    return <ErrorPage />;
  }
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="user-page">
          <h2 className="user-page-title">Personal Data</h2>
          <h4>Name</h4>
          <h3 className="user-page-data">{data?.username}</h3>
          <h4>Name</h4>
          <h3 className="user-page-data">{data?.email}</h3>
          <h4>Wallet</h4>
          <h3 className="user-page-data">{data?.address}</h3>
        </div>
        <div className="user-page-planet">
          <PlanetCircle playAnimation={false}/>
        </div>
      </>
    );
  }
};
