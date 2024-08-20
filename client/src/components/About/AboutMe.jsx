import React from "react";
import logo from "../../assets/F1.png";
import { useNavigate } from "react-router-dom";
import profile from '../../assets/profile-2.jpg'


export default function AboutMe() {

  const navigate = useNavigate()

  return (
    <div className="dark:bg-[#161616] w-full h-[87.9vh] ">
      <div className="h-[84px] bg-[#0e0d0d] " >
        <img onClick={() => navigate('/') } className="h-[50px]  cursor-pointer p-2 " src={logo} alt="" />
      </div>
      <div className="w-full h-full dark:bg-[#0e0d0d] flex  justify-center items-center ">
        <div className="absolute top-[75px] mb-36 ">
          <div className="bg-red-600 w-[208px] m-auto h-[218px]  rounded-[50%]  " >
          <img className="w-[200px] rounded-[50%] ml-[3px] pt-1 hover:scale-105 transition-all  " src={profile} alt="" />
          </div>
          <h1 className="dark:text-white text-[60px] ">Hello! I'm Oswaldo</h1>
          <p className="text-center dark:text-white ">Front End Developer</p>
        </div>
        <div className="">
          <div class="flex items-center gap-4 mt-32">
            <div class="social-button">
              <a href="tel:+524426665226">
                <button class="relative w-12 h-12 rounded-full group">
                  <div class="floater w-full h-full absolute top-0 left-0 bg-green-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-green-400  rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      
                    >
                      <path
                        className="group-hover:fill-[#06a128] dark:group-hover:fill-[#fefeff] fill-white duration-300"
                        d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                      ></path>
                    </svg>
                  </div>
                </button>
              </a>
            </div>
            <div class="social-button">
              <a href="https://github.com/SROSWALDO" target="blank">
                <button class="relative w-12 h-12 rounded-full group">
                  <div class="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="group-hover:fill-[#171543] dark:group-hover:fill-[#fefeff] fill-white duration-300"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </button>
              </a>
            </div>
            <div class="social-button">
              <a
                href="https://www.linkedin.com/in/oswaldo-palacios-perez-523887270/"
                target="blank"
              >
                <button class="relative w-12 h-12 rounded-full group">
                  <div class="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="group-hover:fill-[#171543] dark:group-hover:fill-[#fefeff] fill-white duration-300"
                        d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </button>
              </a>
            </div>
            <div class="social-button">
              <a href="mailto:yaco2002@live.com.mx">
                <button class="relative w-12 h-12 rounded-full group">
                  <div class="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full">
                    <svg
                      height="32"
                      width="32"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="group-hover:fill-[#171543] dark:group-hover:fill-[#fefeff] fill-white duration-300"
                        d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
