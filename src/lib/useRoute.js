import { useNavigate, useLocation } from 'react-router-dom';

const ROUTE_TO_PATH = {
  home: '/',
  services: '/services',
  'service-grant': '/services/grant-consulting',
  'service-pm': '/services/general-pm',
  'service-tech': '/services/tech-projects',
  'service-construction': '/services/construction-pm',
  about: '/about',
  resources: '/resources',
  contact: '/contact',
  privacy: '/privacy',
};

const PATH_TO_ROUTE = Object.fromEntries(
  Object.entries(ROUTE_TO_PATH).map(([id, path]) => [path, id])
);

export function useRoute() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const route = PATH_TO_ROUTE[pathname] || 'home';
  const setRoute = (id) => navigate(ROUTE_TO_PATH[id] || '/');
  return [route, setRoute];
}
