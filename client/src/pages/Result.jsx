import React, { useContext } from 'react';
import Setup from '../components/Setup';

const Result = () => {
    const { showResult, quizs, marks, startOver }  = useContext(Setup);
    return (
        <section className="bg-black/80 h-screen w-full flex items-center justify-center" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="flex h-screen w-full items-center justify-center">
                <div className={`text-white text-xl bg-black/20 p-20 rounded-md text-center w-7/12 ${marks > (quizs.length * 5 / 2) ? 'bg-success' : 'bg-danger'}`}>
                    <h1 className=''>{marks > (quizs.length * 5 / 2) ? 'Awesome!' : 'Oops!'}</h1>
                    <h3 className='mt-8 mb-4'>Your score is {marks} out of {quizs.length * 5}</h3>
                    <button onClick={startOver} className='bg-green-800 py-1 px-4 rounded-md'>Start Over</button>
                </div>
            </div>
        </section>
    );
};

export default Result;