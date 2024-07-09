import React, { useContext } from 'react';
import Setup from '../components/Setup';

const Quiz = () => {
    const { showQuiz, question, quizs, checkAnswer, correctAnswer,
            selectedAnswer,questionIndex, nextQuestion, showTheResult }  = useContext(Setup);

    return (
        <section className="h-full w-full bg-black/80" style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
            <div className=" flex w-full h-screen items-center justify-center">
                <div className="p-2 md:p-8 w-11/12 md:w-7/12 text-sm md:text-lg" style={{ background: '#3d3d3d', borderColor: '#646464' }}>
                    <div className="flex text-white justify-between">
                        <h5 className=''>{question?.question}</h5>
                        <h5 className='' style={{ color: '#60d600', width: '100px', textAlign: 'right' }}>{quizs.indexOf(question) + 1} / {quizs?.length}</h5>
                    </div>
                    <div className='flex flex-col items-start text-start text-black'>
                        {
                            question?.options?.map((item, index) => <button
                                key={index}
                                className={`text-white border-white border w-11/12 text-start py-2 px-3 mt-3 rounded ${correctAnswer === item && 'bg-success'}`}
                                onClick={(event) => checkAnswer(event, item)}
                            >
                                {item}
                            </button>)
                        }
                    </div>
                    {
                        (questionIndex + 1) !== quizs.length ?
                            <button className='text-white py-2 px-4 rounded-md w-100 mt-3 bg-green-800 text-light fw-bold' onClick={nextQuestion} disabled={!selectedAnswer}>Next Question</button>
                            :
                            <button className='text-white py-2 px-4 rounded-md w-100 mt-3 bg-green-800 text-light fw-bold' onClick={showTheResult} disabled={!selectedAnswer}>Show Result</button>
                    }
                </div>
            </div>
        </section>
    );
};

export default Quiz;