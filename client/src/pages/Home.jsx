import React, { useContext } from 'react';
import Setup from '../components/Setup';

const Home = () => {
    const {startQuiz, showStart} = useContext(Setup);
    return (
        <section className='w-full h-screen bg-black/80' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="w-full h-screen flex items-center justify-center">
              <div className="flex w-8/12 h-[80vh] items-center justify-center flex-col text-white text-xl font-semibold rounded-md p-12 gap-4">
                  <h1 className='text-4xl'>Basic React JS Quiz</h1>
                  <button onClick={startQuiz} className="bg-green-900 rounded-md px-4 py-2">Start Quiz</button>
              </div>
            </div>
        </section>
    );
};

export default Home;