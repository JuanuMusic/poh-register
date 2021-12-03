import { useFormData } from "../context";

export default function FormCompleted() {
  const { data } = useFormData();
  // console.log('Got:');
  // console.log(data);

  return (
    <div>
      <h2>Congratulations! 🎉</h2>
      <h2>Your profile was submitted.</h2>
      <p>You can subscribe to receive notifications about your profile status.</p>

      <h3>What's next?</h3>
      <p>Your profile is now in "Vouching Phase" until you receive a vouch from another Human and your deposit is fully funded.</p>

      <h3>How do I get Vouched?</h3>
      <ul>
        <li>Share the link to your profile with someone already in the Registry</li>
        <li>Join the Vouching Groups on Telegram</li>
        <li>Find people to Vouch for you on Telegram</li>
        <li>Join the Proof of Humanity community on Discord</li>
      </ul>
    </div>
    );
}
