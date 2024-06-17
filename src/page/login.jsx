import { useEffect, useState } from "react";
import Tesla from "../../src/assets/Login/Tesla.png";
import Eye from "../../src/assets/Login/Hidepassword.png"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const validateEmail = () => {
      if (email === "") {
        setEmailError("");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    };
    const validatePassword = () => {
      if (password === "") {
        setPasswordError("");
      } else if (password.length < 6) {
        setPasswordError(
          "Invalid password, must be at least 6 characters long"
        );
      } else {
        setPasswordError("");
      }
    };
    validateEmail();
    validatePassword();
  }, [email, password]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailError && !passwordError) {
      alert(
        `Form submitted successfully! Your email ${email} has been submitted.`
      );
      console.log(email, password);
    } else if (emailError && passwordError) {
      alert("Please fix the email address and password errors in the form.");
    } else if (emailError) {
      alert("Please fix the email address error in the form.");
    } else if (passwordError) {
      alert("Please fix the password error in the form.");
    } else {
      console.log("Unknown error, please refresh your browser");
    }
  }

  function handleHidePassword(e) {
    e.preventDefault();
    setHidePassword(!hidePassword);
  }

  return (
    <section>
        <img
          src={Tesla}
          className="w-full h-[910px] absolute object-cover "
          alt="Loginbg"
        />

      <div className="flex justify-center">
        <div className="w-[1440px] relative flex justify-end ">
          <form
            onSubmit={handleSubmit}
            className="bg-white h-[700px] w-[460px] relative mt-10 rounded-lg shadow-md"
          >
            <div className="mx-[48px] mt-[128px]">
              <span className="">ยินดีต้อนรับกลับ</span>
              <div className="">
                <h3 className="text-sm font-medium text-gray-900">อีเมล</h3>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-[6px] focus:ring-primary-600 focus:border-primary-600 w-[360px] h-[48px] 
                    ${emailError ? "border-red-500" : ""}`}
                  placeholder="name@company.com"
                />
                {emailError && email !== "" && (
                  <p className="text-red-500  text-sm mt-1">{emailError}</p>
                )}
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium text-gray-900">
                  รหัสผ่าน
                </h3>
                <input
                  type={hidePassword ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-[6px] focus:border-primary-600 w-[360px] h-[48px]${
                    passwordError ? "border-red-500" : ""
                  }`}
                />

                <div className="flex items-center mt-2">
                  <button
                    onClick={handleHidePassword}
                    className={` ${
                      hidePassword ? "" : "hover:bg-black"
                    }`}
                  >
                    {hidePassword ? 
                    <img
                      src={Eye}
                      className=" "
                      alt=""
                    /> : "Hide Password"}
                  </button>
                </div>
                {passwordError && password !== "" && (
                  <p className="text-red-500 text-xs italic mt-2">
                    {passwordError}
                  </p>
                )}
              </div>

              <div className="flex items-start mt-4">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm ">
                  <label for="terms" className="font-light text-black" />
                  เข้าสู่ระบบตลอดเวลา
                </div>
              </div>

              <button
                type="submit"
                class=" text-white bg-[#1E3769] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-[360px] h-[48px]"
              >
                เข้าสู่ระบบ
              </button>

              <div className="flex">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-4 text-gray-500 text-sm">หรือ</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

              <div className="text-sm font-light ">
                ยังไม่ได้เป็นสมาชิก?
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline text-red-600"
                >
                  สมัครเลย
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;

{
  /* <div className="text-sm font-light ">
                  จำรหัสผ่านไม่ได้? 
                  <a href="#" className="font-medium text-primary-600 hover:underline text-red-600">ลืมรหัสผ่าน</a>
                </div> */
}

{
  /* <div >
  <img class="absolute  w-full" src="/assets/bg.png" alt="" />
    <div class="flex justify-center bg-gray-300 ">
      <h1 class="relative text-white  font-black text-4xl mt-20 max-md:mt-2  ">บริการเช่ารถยนต์</h1>
    </div>
</div> */
}

//   function Login() {

//     const audioRef = useRef(null);

//     useEffect(() => {
//       audioRef.current.play().catch(error => {
//         console.log('Error playing audio:', error);
//       });
//     }, []);

//     return (
//       <div className="flex justify-center">
//         <audio ref={audioRef} src={tokyoDrift} />
//         {/* <audio ref={audioRef} src={youwill} /> */}
//         <div className=" w-full">
//           <Slide />
//           <div className="flex justify-center">
//           <div className=" w-[1128px]">
//                       <CarBrands />
//           <ScollNewCar />
//             </div>
//           </div>

//           <WhyMe />
//         </div>
//       </div>
//     );
//   }

//   export default Login;
