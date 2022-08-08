import Image from "next/image";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
interface Props {
  providers: Object;
}
const Login = ({ providers }: Props) => {
  return (
    <div className="flex h-screen flex-col items-center space-y-16 bg-[url('/assets/twitter-banner.webp')] bg-cover bg-center bg-no-repeat  pt-48">
      <Image
        src={"/assets/twitter-icon-svg-28.jpeg"}
        width={200}
        height={200}
        objectFit="contain"
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            {/* https://devdojo.com/tailwindcss/buttons#_ */}
            <button
              className="group relative inline-flex items-center justify-start overflow-hidden rounded bg-white px-6 py-3 font-medium transition-all hover:bg-white"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <span className="absolute bottom-0 left-0 mb-9 ml-9 h-60 w-60 -translate-x-full translate-y-full rotate-[-40deg] rounded bg-[#1d9bf0] transition-all duration-500 ease-out group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                <FcGoogle className="mr-2 mb-1 inline h-6 w-6" /> Sign up with{" "}
                {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
