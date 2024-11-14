import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";
import { submitAPI } from "./API";

function App() {

const submitForm = (formData) => {
  console.log("Form Data:", formData);
  if (submitAPI(formData)) {
    window.location.href = '/confirmed';
  } else {
    console.log("Something went wrong");
  }
};

  return (
    <div className="Prototype">
      <Header />
      <BookingForm submitForm={submitForm}/>
      <Footer />
    </div>
  );
}

export default App;
