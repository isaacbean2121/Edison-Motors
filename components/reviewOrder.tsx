import { useRouter } from 'next/router';

const ReviewOrderPage = () => {
  const router = useRouter();

  // Wait until router is ready before accessing query
  if (!router.isReady) return null;

  const { lights, steeringWheel, mirrors, fifthWheel, pto, battery_pack, generator } = router.query;

  return (
    <div>
      <h1>Review Order</h1>
      <p>Lights: {lights}</p>
      <p>Steering Wheel: {steeringWheel}</p>
      <p>Mirrors: {mirrors}</p>
      <p>Fifth Wheel: {fifthWheel}</p>
      <p>PTO: {pto}</p>
      <p>Battery Pack: {battery_pack}</p>
      <p>Generator: {generator}</p>
      {/* Display other selections */}
    </div>
  );
};

export default ReviewOrderPage;