import Link from 'next/link';

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>

      <h2>Check to see if you are in the corerct page.</h2>
      <Link href="/"> Click here to go home</Link>
    </div>
  );
};

export default PageNotFound;
