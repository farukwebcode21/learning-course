import React from 'react'


const Home = () => {
    return (
        <>
            <div className="w-full h-96 bg-cover bg-center">
                <div className="flex items-center justify-center h-full w-full bg-gray-700 bg-opacity-50">
                        <div className="text-center">
                        <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Who is the course for?</h1>
                        <p className="text-black text-lg font-serif px-80 py-6">This course is designed for teachers delivering lessons at a GCSE level or equivalent, and for beginner programmers looking to start using HTML and JavaScript.
                            To take this course, you need to be familiar with basic programming structures such as loops and if statements, but you don’t need any experience of HTML, CSS or JavaScript
                            For the week on JavaScript, you need to be comfortable with using functions with parameters and return values. We recommend that you take our Programming 102 course if you are unsure.
                        </p>
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start Your Course</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
