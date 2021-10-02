import { useMemo } from 'react';
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import qs from 'qs';

function useRoutes() {
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  const match = useRouteMatch();

  return useMemo(() => {
    return {
      history,
      location,
      match,
      params,
      query: {
        ...qs.parse(location.search),
        ...params,
      },
    };
  }, [history, location, match, params]);
}

export default useRoutes;
