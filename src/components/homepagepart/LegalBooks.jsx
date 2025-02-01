import React from "react";
import ComponentHeader from "../home/component/header/ComponentHeader";
import { Container } from "@chakra-ui/react";

const LegalBooks = () => {
  return (
    <>
      <div className="bg-[#F267271A] min-h-screen p-8">
        <Container maxW="container.xl" py={2}>
          <div>
            <ComponentHeader
              headtitle={"Reference"}
              title={"Explore Legal Books"}
              description={"Sidestep the lawyers with do-it-yourself books"}
            />

            <div className="flex flex-wrap justify-center gap-6">
              {/* Card 1 */}
              <div className="flex flex-col max-w-[280px] w-full">
                <div className="border-2 border-black p-2">
                  <div className="relative bg-[#C0872999] py-20 text-center shadow-md">
                    <h3 className="text-3xl text-white font-bold mb-2">
                      Family Law II
                    </h3>
                    <p className="text-gray-800 mb-4">English version</p>
                  </div>
                </div>
                <p className="text-gray-600 text-center mx-auto mt-4">
                  Lorem ipsum dolor sit amet consectetur. Commodo pulvinar
                  molestie pellentes urna libero.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col max-w-[280px] w-full">
                <div className="border-2 border-black p-2">
                  <div className="relative bg-[#C0872999] py-16 text-center shadow-md">
                    <h3 className="text-3xl text-white font-bold mb-2">
                      Bhartiya Nyaay Itihaas
                    </h3>
                    <p className="text-gray-800 mb-4">Hindi version</p>
                  </div>
                </div>
                <p className="text-gray-600 text-center mx-auto mt-4">
                  Lorem ipsum dolor sit amet consectetur. Commodo pulvinar
                  molestie pellentes urna libero.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col max-w-[280px] w-full">
                <div className="border-2 border-black p-2">
                  <div className="relative bg-[#C0872999] py-16 text-center shadow-md">
                    <h3 className="text-3xl text-white font-bold mb-2">
                      Jurisprudence Indian Court
                    </h3>
                    <p className="text-gray-800 mb-4">English version</p>
                  </div>
                </div>
                <p className="text-gray-600 text-center mx-auto mt-4">
                  Lorem ipsum dolor sit amet consectetur. Commodo pulvinar
                  molestie pellentes urna libero.
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col max-w-[280px] w-full">
                <div className="border-2 border-black p-2">
                  <div className="relative bg-[#C0872999] py-16 text-center shadow-md">
                    <h3 className="text-3xl text-white font-bold mb-2">
                      Jurisprudence Indian Court
                    </h3>
                    <p className="text-gray-800 mb-4">English version</p>
                  </div>
                </div>
                <p className="text-gray-600 text-center mx-auto mt-4">
                  Lorem ipsum dolor sit amet consectetur. Commodo pulvinar
                  molestie pellentes urna libero.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16   flex justify-end">
            <div className="flex items-center text-right ml-[9vw] relative">
              {/* Left Diamond */}
              <div
                className="w-3 h-3 bg-[#C08729] transform rotate-90 absolute max-sm:left-[24vw] left-[7vw]"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>
              <div
                className="w-3 h-3 bg-[#C08729] transform rotate-90 absolute max-sm:left-[29vw] left-[9vw] "
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>

              {/* Line */}
              <div className="h-[2px] bg-[#C08729] w-20"></div>

              {/* Right Diamond */}
              <div
                className="w-3 h-3 bg-[#C08729] transform rotate-90"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LegalBooks;
