import illustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg";

import iconList from "./assets/images/icon-list.svg";
import iconSuccess from "./assets/images/icon-success.svg";
import {useState} from "react";

function App() {
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  //const [isValid, setIsValid] = useState(false);

  const handleOnChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "") {
      return setError("Email is required");
    }

    if (email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) === null) {
      return setError("Invalid email address");
    }
    setError(null);
    setSubmited(true);
  };

  const handleDissmiss = () => {
    setEmail("");
    setSubmited(false);
  };

  const renderForm = () => {
    return (
      <main className="flex h-screen bg-charcoalgrey">
        <div
          className="font-Roboto bg-white 
        desktop:rounded-4xl desktop:m-auto desktop:max-w-6xl desktop:flex desktop:flex-row-reverse desktop:h-2/3"
        >
          <img
            src={illustrationMobile}
            alt="illustration sign up mobile"
            className="object-cover w-full desktop:hidden"
          />
          <div className="hidden desktop:block w-1/2 p-6 rounded-3xl overflow-hidden">
            <img
              src={illustrationDesktop}
              alt="illustration sign up mobile"
              className="object-cover w-full h-full rounded-3xl overflow-hidden"
            />
          </div>

          <div className="p-8 desktop:w-1/2 desktop:flex desktop:flex-col desktop:align-middle desktop:justify-center desktop:ml-6">
            <h1 className="font-bold text-4xl text-darkslategrey mb-6 desktop:text-6xl">
              Stay updated!
            </h1>
            <p className="mb-6">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="mb-4">
              <li className="flex flex-row mb-2 items-start">
                <div className="mt-0.5">
                  <img src={iconList} alt="icon list" />
                </div>
                <p className="ml-3">
                  Product discovery and building what matters
                </p>
              </li>
              <li className="flex flex-row mb-2 items-start">
                <div className="mt-0.5">
                  <img src={iconList} alt="icon list" />
                </div>
                <p className="ml-3">
                  Measuring to ensure updates are a success
                </p>
              </li>
              <li className="flex flex-row mb-3 items-start">
                <div className="mt-0.5">
                  <img src={iconList} alt="icon list" />
                </div>
                <p className="ml-3">And much more!</p>
              </li>
            </ul>

            <div className="flex flex-col mt-8">
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex flex-row justify-between px-1 mb-2">
                  <label className="text-darkslategrey font-bold text-xs">
                    Email address
                  </label>
                  {error && (
                    <p className="ps-2 text-tomato text-xs font-bold">
                      {error}
                    </p>
                  )}
                </div>
                <input
                  className={`border border-gray-300 rounded-lg p-4 mb-2 
                  hover:cursor-pointer 
                  focus:outline-none focus:border-darkslategrey focus:text-darkslategrey ${
                    error
                      ? "border-tomato text-tomato font-bold bg-red-100"
                      : null
                  }`}
                  placeholder="email@company.com"
                  type="email"
                  value={email}
                  required
                  onChange={handleOnChange}
                />
              </form>
            </div>

            <button
              type="submit"
              className="font-bold bg-darkslategrey w-full rounded-lg p-4 text-white mt-2 
              hover:cursor-pointer hover:bg-gradient-to-r from-pink-500 via-red-500 to-tomato hover:shadow-custom"
              onClick={handleSubmit}
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </main>
    );
  };

  const renderThanks = () => {
    return (
      <main className="flex h-screen bg-charcoalgrey">
        <div
          className="h-screen bg-white 
        desktop:h-3/5 desktop:rounded-4xl desktop:max-w-lg desktop:m-auto desktop:p-6"
        >
          <section className="h-5/6 flex flex-col justify-center px-8">
            <img
              src={iconSuccess}
              alt="illustration success"
              className="object-fit w-16 mb-4"
            />
            <h1
              className="text-darkslategrey font-bold text-4xl my-6
            desktop:text-6xl"
            >
              Thanks for subscribing!
            </h1>
            <p>
              A confirmation email has been sent to{" "}
              <span className="font-bold text-darkslategrey">{email}. </span>{" "}
              Please open it and click the button inside to confirm your
              subscription.
            </p>
          </section>
          <section
            className="h-1/6 flex flex-col justify-center px-8 
          desktop:pb-8"
          >
            <button
              className="bg-darkslategrey w-full rounded-lg p-4 text-white mt-2
              hover:cursor-pointer hover:bg-gradient-to-r from-pink-500 via-red-500 to-tomato hover:shadow-custom"
              onClick={handleDissmiss}
            >
              {" "}
              Dismiss message
            </button>
          </section>
        </div>
      </main>
    );
  };

  return <>{submited ? renderThanks() : renderForm()}</>;
}

export default App;
