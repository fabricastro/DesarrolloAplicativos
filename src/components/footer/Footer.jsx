import { TbBrandValorant } from "react-icons/tb";

export const Footer = () => {
  return (
    <footer className="bg-oscuro">
      <div className="mx-auto w-full max-w-screen-xl p-4 text-center md:py-8">
        <div className="  sm:flex sm:items-center sm:justify-between">
          <p className="inline-flex text-[32px] font-bold text-inherit">
            <TbBrandValorant size={40} className="pr-1 pt-2" />
            ValorantWiki
          </p>
          <ul className="my-2 flex-auto self-center text-sm font-medium dark:text-gray-400 sm:inline-flex sm:flex-none  ">
            <li>
              <a
                href="https://github.com/fabricastro"
                className="  hover:underline md:mr-6"
                target="blank"
              >
                Fabricio Castro
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MatiCastr0"
                className="   hover:underline md:mr-6"
                target="blank"
              >
                Matias Castro
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          © 2023. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
