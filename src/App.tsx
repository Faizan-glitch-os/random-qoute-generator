import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { getRandomQuote, type quotesType } from "./http";
import { motion, AnimatePresence } from "motion/react";

function App() {
  const { data, isError, error, isRefetching, refetch } = useQuery<
    quotesType[]
  >({
    queryKey: ["randomQuote"],
    queryFn: getRandomQuote,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="max-w-screen min-h-screen flex flex-col items-center justify-center ">
      <div className="font-montserrat sm:w-[80%] flex flex-col rounded-2xl p-4">
        {isRefetching && (
          <div className="items-center justify-center flex animate-spin ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
              width="100"
              height="100"
            >
              <g>
                <path
                  stroke="none"
                  fill="#00a98f"
                  d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                />
              </g>
            </svg>
          </div>
        )}
        {isError && <p>{error.message}</p>}
        <AnimatePresence initial={false} key={"quote"}>
          {data && data.length > 0 && !isRefetching && (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl text-slate-900"
              >
                "{data[0].quote}"
              </motion.p>
              <p className="mt-4 text-3xl text-cyan-900 text-center">
                --{data[0].author}
              </p>
            </>
          )}
        </AnimatePresence>
      </div>
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => refetch()}
        className="text-xl p-4 mt-8 rounded-2xl text-white bg-slate-800 hover:bg-slate-900 fixed bottom-4 "
      >
        Click to load
      </motion.button>
    </div>
  );
}

export default App;
