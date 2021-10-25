import React, { useEffect, useState } from 'react'


const Service = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('./informa.json')
            .then(res => res.json())
            .then(data => setService(data))
    },[])

    return (
        <><h1 className="text-center uppercase font-medium text-green-500 text-4xl p-10">Our Services</h1>
            {
            services.map((service) => {
                const { course, course_id, instructor, instructor_2, img, img_2, description, description_id } = service
                return  <section key={service.id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="w-full md:w-2/5 h-80">
                            <img className="object-center object-cover w-full h-full" src={img} alt=""/>
                        </div>
                        <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                            <p className="text-xl text-gray-700 font-bold">{ course }</p>
                            <p className="text-base text-gray-400 font-normal">{ instructor }</p>
                            <p className="text-base leading-relaxed text-gray-500 font-normal">{description }</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="w-full md:w-2/5 h-80">
                            <img className="object-center object-cover w-full h-full" src={img_2} alt=""/>
                        </div>
                        <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                            <p className="text-xl text-gray-700 font-bold">{course_id }</p>
                            <p className="text-base text-gray-400 font-normal">{ instructor_2}</p>
                            <p className="text-base leading-relaxed text-gray-500 font-normal">{description_id}</p>
                        </div>
                    </div>
                </div>
            </section>
             })
            }
        </>
    )
}

export default Service
