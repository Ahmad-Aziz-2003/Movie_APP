// pages/help/[...slug].js
import { useRouter } from 'next/router';

const Help = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Help Section</h1>
      <p>You're viewing: {slug?.join('/')}</p>
    </div>
  );
};

export default Help;
