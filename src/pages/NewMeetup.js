import NewMeetupForm from "../components/meetups/NewMeetupForm";
// import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    // const navigate = useNavigate();
    fetch(
      "https://react-meetup-b4d32-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      window.location.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
