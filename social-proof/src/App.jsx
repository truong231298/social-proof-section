import bgBottomDes from '/images/bg-pattern-bottom-desktop.svg'
import bgBottomMo from '/images/bg-pattern-bottom-mobile.svg'
import bgTopDes from '/images/bg-pattern-top-desktop.svg'
import bgTopMo from '/images/bg-pattern-top-mobile.svg'
import iconStar from '/images/icon-star.svg'


export default function App() {

  const infors = [
    { avatar: '/images/image-colton.jpg', name: 'Colton Smith', sub: "Verified Buyer", content: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time.Excellent!" },
    { avatar: '/images/image-irene.jpg', name: 'Irene Roberts', sub: "Verified Buyer", content: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery." },
    { avatar: '/images/image-anne.jpg', name: 'Anne Wallace', sub: "Verified Buyer", content: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!" },
  ]

  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className='container'>
        {/* img top */}
        <div>
          <img src={bgTopDes} alt="" className='hidden sm:block' />
          <img src={bgTopMo} alt="" className='sm:hidden' />
        </div>
        <div className='absolute w-full md:w-3/4 flex flex-col md:ml-36 p-4 top-20 '>
          {/* part 1 */}
          <div className='flex flex-col md:flex-row justify-between text-center md:text-left'>
            <div className='md:w-1/2'>
              <h1 className='text-VeryDarkMagenta text-6xl font-semibold'>10,000+ of our users love our products.</h1>
              <p className='text-DarkGrayishMagenta mt-4'>We only provide great products combined with excellent customer service.
                See what our satisfied customers are saying about our services.</p>
            </div>
            <div className='md:w-1/2 items-center'>
              {["Rated 5 Stars in Reviews", "Rated 5 Stars in Report Guru", "Rated 5 Stars in BestTech"].map((star,index) => (
                <div key={star} className={`flex flex-col justify-center items-center md:flex-row md:m-4 p-2 gap-1 bg-LightGrayishMagenta
                ${index == 1 ? 'md:ml-12 md:mr-12' : `${index == 2 ? 'md:ml-16' : 'md:mr-16'}` }`}>
                  <span className='flex flex-row'>
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={iconStar} alt="" className='w-6 h-6 mx-1' />

                    ))}
                  </span>

                  <p className='font-semibold text-VeryDarkMagenta ml-4'>{star}</p>
                </div>
              ))}

            </div>
          </div>
          {/* part 2 */}
          <div className='flex flex-col md:flex-row gap-4 mt-8'>
            {infors.map((infor,index) => (
               <div key={infor.name} className={`flex flex-col gap-4 bg-VeryDarkMagenta rounded-lg p-8
               ${index == 1 ? 'md:mt-6 mb-4' : `${index == 2 ? "md:mt-10" : "mb-8"}` }`}>
                <div className='flex flex-row gap-2 items-center'>
                  <img src={infor.avatar} alt="" className='rounded-full w-10 h-10'/>
                  <span>
                    <h1 className='text-white'>{infor.name}</h1>
                    <p className='text-SoftPink '>{infor.sub}</p>
                  </span>
                </div>
                <p className='text-LightGrayishMagenta'>{infor.content}</p>
               </div> 
            ))}
                      
          </div>
        </div>

        {/* img bottom */}
        <div>
          <img src={bgBottomDes} alt="" className='hidden sm:block' />
          <img src={bgBottomMo} alt="" className='sm:hidden' />
        </div>
      </section>
    </main>
  )
}