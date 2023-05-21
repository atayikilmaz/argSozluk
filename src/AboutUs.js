import { Carousel, Typography, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

export default function AboutUs() {
    return (
        <div className="flex justify-center items-center h-screen overflow-hidden">
        <Carousel
          className="rounded-xl mb-24 w-3/4 mt-8 md:w-2/4 lg:w-1/2 h-3/4"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 -translate-y-2/4 left-4"
            >
              <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 -translate-y-2/4 !right-4"
            >
              <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
            </IconButton>
          )}
        >
          <div className="relative h-full w-full flex justify-center items-center">
            <img
              src="https://i0.wp.com/www.politikyol.com/wp-content/uploads/2021/10/mustafa-kemal-ataturk-1.jpg?fit=1920%2C1206&ssl=1"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Biz Kimiz?
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Biz ülkesinin geleceğini düşünen ve bu amaç doğrultusunda bir oy bir oydur diyerek hareket eden, Türk gençleriyiz.
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full flex justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ittihadism.svg/2560px-Flag_of_Ittihadism.svg.png"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Misyonumuz
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Bu siteyi kurma amacımız insanların tartışırken çok kısa süre içerisinde karşı tarafa kanıtlarıyle beraber herhangi bir yorum katılmamış şekilde etkili argümanlar sunabilmesidir.
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full flex justify-center items-center">
            <img
              src="https://1.bp.blogspot.com/-qmvJnScAFDE/VovXPR9MbSI/AAAAAAAAI4Q/l_kOPTBABYs/s1600/maxresdefault.jpg"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Sizden Bir Ricamız Var
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Bu sözlükte yer alan argümanlara herhangi bir şekilde olumlu/olumsuz veya yeni bir düşünceniz var ise lütfen yukarıdaki formda bizle paylaşmaktan çekinmeyin.
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      
    );
}