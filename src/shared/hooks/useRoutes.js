import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

function useRoutes() {
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  const match = useRouteMatch();

  return {
    back: history.goBack,
    push: history.push,
    history,
    location,
    match,
    params,
  };
}

export default useRoutes;
