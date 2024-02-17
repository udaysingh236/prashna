import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

function HomeLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return isLoading ? (
    <Loader />
  ) : (
    <div className="mx-auto flex  h-dvh max-w-md flex-col items-center justify-between overflow-scroll bg-black-700">
      <Outlet />
    </div>
  );
}

export default HomeLayout;
