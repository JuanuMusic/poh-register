import { useFormData } from "../context";
 
export default function FormCard({ children }) {
  const { data } = useFormData();

  return (
    <div>
      {children}
      {/* <hr style={{margin: "2rem 0;"}} /> */}
      {/* <h3>Profile Data</h3> */}
      {/*  remove style display none in "ul" below to display the data */}
      <ul style={{display: "none"}}>
      {
        Object.keys(data).map((key, i) => {
          if (typeof(data[key]) === 'object' && data[key][0] != null) {
            // Get filename from FileList object
            return <li key={i}><strong>filename:</strong> {data[key][0].name}</li>;
          } else if (typeof(data[key]) === 'boolean') {
            // Get result from boolean checkbox
            return <li key={i}><strong>{key}:</strong> {data[key].toString()}</li>
          }

          return <li key={i}><strong>{key}:</strong> {data[key]}</li>;
        })
      }
      </ul>
    </div>
  );
}
