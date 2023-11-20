import { HomeHeroSection } from "./home-hero-section";
import { render, screen } from "@testing-library/react";

describe('Home hero section',()=>{
    test('display the home hero section',()=>{
      const {container} = render(<HomeHeroSection/>) 
      expect(container).toMatchSnapshot(` <section className="bg-hero-pattern mt-5 xl:mt-20 xl:bg-left">
      <div className="container flex flex-col-reverse items-center xl:flex-row">
        <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right ">
          <h3 className="text-xl dark:text-info xl:text-2xl ">خوش آمدی...</h3>
          <h1 className="text-3xl font-black gradient lg:text-3xl xl:text-5xl">
            مسیر صعود به قله های برنامه نویسی 
          </h1>
          <p>
            هر جای مسیرِ برنامه‌نویسی که باشی، با هم‌راهی استادهای باتجربهٔ
            کلاسبن می‌تونی بدون محدودیت به قله‌های بالاتر صعود کنی. ما همیشه
            هواتو داریم.
          </p>
          <div className="mt-5 flex gap-4">
            <Button variant="primary" size="large">
              دوره‌های ری‌اکت و نکست
            </Button>
            <Button variant="neutral" size="large">
              مشاوره برنامه‌نویسی
            </Button>
          </div>
          <Image
            src="/images/frameworks.png"
            width={412}
            height={39}
            alt=""
            className=" grayscale mt-4 opacity-70 m-auto xl:m-0"
          />
        </div>
        <Image
          src="/images/programmer-landing.svg"
          width={702}
          height={521}
          alt="کلاسبن"
        />
      </div>
    </section>`)
    })
})