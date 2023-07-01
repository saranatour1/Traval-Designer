
// eslint-disable-next-line react/prop-types
function TopHeading({ pageName }) {
  return (
    <div className="text-center">
      <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
        {pageName}
      </h1>
      <p className="text-gray-500 dark:text-gray-400">
        {pageName} to access your account
      </p>
    </div>
  );
}

export default TopHeading;
