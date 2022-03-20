import man2 from '../../assets/images/man2.png';
import woman1 from '../../assets/images/woman3.jpeg';
import woman2 from '../../assets/images/woman2.jpeg';

const Services = () => {
  return (
    <div id="services" className="services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-heading"
            
            >
            </div>
          </div>
          <div className="col-lg-12">
            <div className="naccs">
              <div className="grid">
                <div className="row">
                  <h1 className="text-center text-3xl font-bold">Testimonials</h1>
                  <section id="testimonials" class=" xl:grid grid-cols-3">
                    <div></div>
                    <figure class=" bg-slate-100 rounded-xl p-8 mt-10 dark:bg-slate-800 mx-4 ">
                    <img class="w-24 h-24  rounded-full mx-auto" src={woman2} alt="" width="384" height="512"/>
                    <div class="pt-6  text-center  space-y-4">
                      <blockquote>
                        <p class="text-lg font-medium">
                        I began my tech journey 2017, however, I made little or nothing out of the knowledge I had. A radio jingle performed the magic and I got connected with the biggest vocational Technology Institution in
                        the south east region of Nigeria, Upskill Network. And today, I enjoy profits from this one in a life time connection.
                        </p>
                      </blockquote>
                      <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                          Queen Davidson
                        </div>
                        {/* <div class="text-slate-700 dark:text-slate-500">
                          Staff Engineer, Algolia
                        </div> */}
                      </figcaption>
                    </div>
                    </figure>
                    <div></div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Services;