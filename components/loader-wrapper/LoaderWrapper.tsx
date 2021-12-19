import Loader from '../loader/Loader';

interface ILoaderWrapperProps {
  isLoading: boolean;
  message?: string;
}

const LoaderWrapper: React.FC<ILoaderWrapperProps> = ({
  children,
  isLoading,
  message,
}) => {
  return isLoading ? (
    <>
      <p>{message && message}</p>
      <Loader />
    </>
  ) : (
    <>{children}</>
  );
};

export default LoaderWrapper;
